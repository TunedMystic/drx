FROM node:11.3.0-alpine

ENV APP_PATH="/usr/src/web"

# Make app directories.
RUN mkdir -p $APP_PATH
WORKDIR $APP_PATH

COPY ./package.json $APP_PATH/

# Install npm packages.
RUN npm install --pure-lockfile

ADD . $APP_PATH
