# version of node image docker uses
# it has node.js and npm already
FROM node:carbon

RUN mkdir -p /usr/src/app

COPY package*.json /usr/src/app/

WORKDIR /usr/src/app/

RUN npm i --only=production

# Bundle app source
RUN mkdir build

COPY build /usr/src/app/build/

EXPOSE 4000

# CMD ['npm', 'run', 'start:prod']
# CMD ['node', './build']

ENTRYPOINT ["npm", "run", "production"]
