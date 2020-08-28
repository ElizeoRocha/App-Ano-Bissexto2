FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install typescript
RUN npm link typescript
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/anoBissexto /usr/share/nginx/html
