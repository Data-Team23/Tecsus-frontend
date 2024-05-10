
FROM node:lts-alpine

USER node

WORKDIR /app

COPY package*.json ./

RUN npm install --ignore-scripts

COPY public ./public

COPY src ./src

EXPOSE 8080

CMD ["npm", "run", "serve"]