FROM debian:stable
EXPOSE 80

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
        python \
    # install node
    && curl -sL https://deb.nodesource.com/setup_4.x | bash - \
    && apt-get install -y nodejs \
    # clean up (to reduce image size)
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    # upgrade npm
    && npm install -g npm \
    # install pm2
    && npm install -g pm2 \
    # install node dependencies
    && npm install --production \
    # link nginx config
    && ln -s $APP_ROOT_DIR/config/nginx /etc/nginx/conf.d/mishkin.conf \
    # remove nginx example server
    && rm /etc/nginx/sites-enabled/default

CMD \
    # start application instance
    pm2 start $APP_ROOT_DIR/build/index.js \
    # run nginx in foreground
    && nginx -g 'daemon off;'
