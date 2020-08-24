FROM node:latest as node 
WORKDIR /app
COPY package.json /app
RUN npm install --silent
RUN npm install -g typescript
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
