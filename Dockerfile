FROM node:latest
WORKDIR /var/sockets

COPY ./package.json .
RUN npm install

COPY ./ws_client.js ./ws_server.js ./

EXPOSE 9090