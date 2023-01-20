FROM node:16.16.0

WORKDIR /app
COPY package.json .
RUN npm install --force
COPY . .
EXPOSE 4200
CMD [ "npm", "start"]

# #stage 1
# FROM node:16.16.0 as node
# WORKDIR /app
# COPY . .
# RUN npm install --force
# R0
# #stage 2
# FROM nginx:alpine
# COPY --from=node /app/dist/SchoolManagementSystemAngular /usr/share/nginx/html