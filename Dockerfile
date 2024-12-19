FROM node:alpine AS dev
WORKDIR '/app'
COPY package.json .
COPY package-lock.json .
RUN npm install
EXPOSE 5000
CMD [ "npm", "run", "dev" ]