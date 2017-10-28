ARG NODE_VERSION=8.8.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY bin/entrypoint /usr/bin/
COPY package.json package-lock.json ./

RUN npm install -g grunt

ENTRYPOINT ["entrypoint"]

CMD ["npm"]
