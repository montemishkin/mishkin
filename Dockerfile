FROM ubuntu:14.04

# root directory of app
ENV APP_ROOT_DIR /root/mishkin
# copy app source code
COPY . $APP_ROOT_DIR
# change into app root dir
WORKDIR $APP_ROOT_DIR


RUN \
    # update packages lists
    apt-get update \
    # install dependencies
    && apt-get install -y \
        nginx \
        # needed for node
        build-essential \
        curl \
        git \
    && curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash - \
    # install node
    && apt-get install -y nodejs \
    # clean up (to reduce image size)
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    # upgrade npm
    && npm install -g npm \
    # install pm2 and gulp
    && npm install -g pm2 gulp

RUN \
    # install app's node dependencies
    npm install \
    # build app
    && gulp build-server-production build-client-production \
    # link nginx config
    && ln -s $APP_ROOT_DIR/config/nginx /etc/nginx/conf.d/mishkin.conf \
    # remove example server
    && rm /etc/nginx/sites-enabled/default



EXPOSE 80
# default to running nginx in foreground
CMD pm2 start /root/mishkin/build/server.js \
    && nginx -g 'daemon off;'
