# version of node image docker uses
# it has node.js and npm already
FROM node:carbon

RUN mkdir -p /usr/local/app/

COPY package*.json ./

WORKDIR /usr/local/app/

RUN npm i --production

# Bundle app source
COPY . .

EXPOSE 3000

CMD ['npm', 'run', 'start:prod']

