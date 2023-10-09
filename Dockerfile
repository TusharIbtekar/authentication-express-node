FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN corepack enable

RUN pnpm install

COPY . .

EXPOSE 3000

CMD [ "pnpm", "start" ]
