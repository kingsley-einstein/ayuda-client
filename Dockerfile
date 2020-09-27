ARG NODE_VERSION=14-alpine
FROM node:${NODE_VERSION}
COPY *.json ./
COPY src ./src
COPY angular.json .
RUN npm install
COPY . .
RUN npm run build
ENTRYPOINT ["npm", "run", "start:prod"]
