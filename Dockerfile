# version of node image docker uses
# it has node.js and npm already
FROM node:carbon

RUN mkdir -p /usr/src/app

COPY package*.json /usr/src/app/

# set the file path context so that instructions with relative path can be resolved correctly
WORKDIR /usr/src/app/

RUN npm cache clean - force && npm i --only=production

# Bundle app source
RUN mkdir build tasks

COPY build build/
COPY tasks tasks/

EXPOSE 4000

ENTRYPOINT ["npm", "run", "production"]
