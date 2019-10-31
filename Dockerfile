# Dev
# Use NodeMon for reset server in any change
FROM node:12-alpine AS development

RUN mkdir /srv/src && chown node:node /srv/src

USER node

WORKDIR /srv/src

COPY --chown=node:node package.json package-lock.json ./

RUN npm cache clean --force && npm install --quiet --no-optional

RUN npm install --save nodemon --quiet --no-optional

