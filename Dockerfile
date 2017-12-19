# version of node image docker uses
# it has node.js and npm already
FROM node:carbon

RUN mkdir -p /usr/src/app

COPY package*.json /usr/src/app/

WORKDIR /usr/src/app/

RUN npm i --only=production

# Bundle app source
RUN mkdir build tasks

COPY build /usr/src/app/build/
COPY tasks /usr/src/app/tasks/
COPY config /usr/src/app/config/

EXPOSE 4000

ENTRYPOINT ["npm", "run", "production"]
