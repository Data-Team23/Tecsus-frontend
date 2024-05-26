
FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --ignore-scripts
RUN npm install -g @vue/cli-service

COPY public ./public
COPY src ./src

# Ajustar as permissões do diretório de trabalho e node_modules
RUN chown -R node:node /app

# Mudar para o usuário node
USER node

EXPOSE 8080

CMD ["npm", "run", "serve"]