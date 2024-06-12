# Etapa de construção (build-stage)
FROM node:lts-alpine as build-stage

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências e instalar
COPY package*.json ./
RUN npm install --ignore-scripts

# Copiar o código fonte da aplicação e construir
COPY public ./public
COPY src ./src
RUN npm run build

# Etapa de produção (production-stage)
FROM nginx:alpine

# Adicionar um usuário não privilegiado
RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot

# Copiar os arquivos construídos para a pasta padrão do Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Alterar o usuário padrão para o usuário não privilegiado
USER nonroot

# Expor a porta 80
EXPOSE 80

# Comando padrão para rodar o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
