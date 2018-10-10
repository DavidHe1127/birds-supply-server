# Step 1: Builder image
FROM node:9-alpine AS builder

# set the file path context so that instructions with relative path can be resolved correctly
WORKDIR /home/node/app
COPY . .
RUN npm install && npm run build
COPY package*.json /usr/src/app/

###############################################################################################

# step 2: Run image
FROM node:9-alpine
ENV NODE_ENV=production
WORKDIR /home/node/app

# Install dependencies for production only
COPY ./package* ./
RUN npm cache clean --force && \
    npm i --only=production

COPY --from=builder /home/node/app/build ./build

EXPOSE 4000

ENTRYPOINT ["npm", "run", "production"]
