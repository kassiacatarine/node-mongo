FROM node:latest

LABEL Kássia Catarine

ENV NODE_ENV=development

COPY . /var/projets
WORKDIR /var/projets

RUN npm install 
ENTRYPOINT npm start

EXPOSE 3000