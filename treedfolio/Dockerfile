FROM node:20.10.0-slim

USER node 

WORKDIR /home/node/app

COPY --chown=node:node ./package*.json ./
RUN npm run ci

COPY --chown=node:node . .
RUN npm run build:clean

#CMD [ "npm", "run", "start" ]
