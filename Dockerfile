ARG NODE_VERSION=14-alpine
FROM node:${NODE_VERSION}
WORKDIR /app
COPY *.json ./
COPY src ./src
RUN npm install
RUN ls -al
COPY . .
RUN npm run build
ENTRYPOINT ["npm", "run", "start:prod"]
