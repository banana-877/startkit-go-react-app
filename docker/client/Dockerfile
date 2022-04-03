FROM node:12.16.1
WORKDIR /client
COPY client/. .
RUN npm install
ENTRYPOINT [ "npm", "start" ]