FROM node:latest

MAINTAINER Kimi Löffel <kimi.loeffel@gmail.com>

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]
