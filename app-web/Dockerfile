# Etapa de construção da aplicação Vue
FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de produção
FROM node:lts-alpine AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
EXPOSE 8080
CMD ["npm", "run", "serve"]