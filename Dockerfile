ARG NODE_VERSION=14-alpine
FROM node:${NODE_VERSION}
COPY *.json ./
COPY src ./src
RUN npm install
COPY . .
ENTRYPOINT ["npm", "run", "start:prod"]
