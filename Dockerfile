FROM node:18-alpine3.19

RUN apk update && apk add --no-cache dumb-init

WORKDIR /app

COPY package*.json /app

RUN npm i

COPY tsconfig*.json /app

COPY src /app/src

RUN npm run build && \ 
    npm prune --production

COPY . .

EXPOSE 3000

CMD ["dumb-init","node", "dist/main.js"]
