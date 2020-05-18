 #Stage 1
 
 FROM node:latest as node

 WORKDIR /app

COPY . .

RUN npm install

 RUN npm run build --prod
#RUN npm manual_build




 #Stage 2 only extract the runable


 FROM nginx:alpine

 COPY --from=node /app/dist/dashboard /usr/share/nginx/html
