FROM node:9.6

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json ./

RUN [ "npm", "i" ]

COPY src ./src

RUN chown -R node:node .
USER node

CMD [ "node", "src" ]