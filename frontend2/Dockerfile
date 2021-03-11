FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN yarn
RUN yarn build
COPY ./ .
CMD [ "yarn", "start" ]
