# build environment
FROM node:16-alpine3.12 as build
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
RUN npm run build
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/ssl/host.key /etc/nginx
COPY --from=build /app/ssl/host.crt /etc/nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]