FROM node:14 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN yarn

COPY . .