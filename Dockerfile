FROM node:alpine AS dev
WORKDIR '/app'
COPY package.json .
COPY package-lock.json .
RUN npm install
EXPOSE 5173
CMD [ "npm", "run", "dev" ]