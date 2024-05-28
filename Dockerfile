
FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --ignore-scripts --unsafe-perm=true
RUN npm install -g @vue/cli-service --ignore-scripts --unsafe-perm=true

COPY public ./public
COPY src ./src

# Ajustar as permissões do diretório de trabalho e node_modules
RUN chown -R node:node /app

# Criar o diretório node_modules/.cache com permissões adequadas
RUN mkdir -p /app/node_modules/.cache && \
    chown -R node:node /app/node_modules/.cache

# Mudar para o usuário node
USER node

EXPOSE 8080

CMD ["npm", "run", "serve"]