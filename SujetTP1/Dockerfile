FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY index.js ./

RUN mkdir -p /app/data && chown -R node:node /app

EXPOSE 3000

USER node

CMD ["node", "index.js"]
