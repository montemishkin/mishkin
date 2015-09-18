# mishkin

The code for mishkin.com.


## Development Setup

```shell
cd path/to/project/root
mkvirtualenv mishkin
# install all dependencies
pip install -r requirements.base.pip
pip install -r requirements.dev.pip
npm install
# build the frontend
gulp build
# migrate the database
./manage.dev.py makemigrations
./manage.dev.py migrate
# run the development server
./manage.dev.py runserver
```


## Live Setup

Prerequisites:

- upstart
- nginx
- node, npm
- python3, virtualenvwrapper (under python3)

```shell
cd path/to/project/root
mkvirtualenv mishkin
# install all dependencies
pip install -r requirements.base.pip
pip install -r requirements.live.pip
npm install
# build the frontend
./node_modules/gulp/bin/gulp.js production-build
# migrate the database
./manage.live.py makemigrations
./manage.live.py migrate
# collect all static assets
./manage.live.py collectstatic
# configure the project as an upstart service
sudo cp config/mishkin.upstart /etc/init/mishkin.conf
# start up the service
sudo service mishkin start
# link nginx configuration to sites-available
sudo ln -s ~/projects/mishkin/config/mishkin.nginx /etc/nginx/sites-available/mishkin
# link from sites-available to sites-enabled
sudo ln -s /etc/nginx/sites-available/mishkin /etc/nginx/sites-enables/mishkin
# test nginx configuration for syntax errors
sudo nginx -t
# restart nginx
sudo service nginx restart
```
