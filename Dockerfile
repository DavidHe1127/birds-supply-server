# version of node image docker uses
# it has node.js and npm already
FROM node:carbon

RUN mkdir -p /usr/local/app/

COPY package*.json ./

WORKDIR /usr/local/app/

RUN npm i --production

EXPOSE 3000

ENTRYPOINT []

# Bundle app source
COPY . .
