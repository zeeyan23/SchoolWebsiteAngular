#stage 1
FROM node:16.16.0 as node
WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run build
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/SchoolManagementSystemAngular /usr/share/nginx/html