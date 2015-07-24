# mishkin_com

The code for mishkin.com.


## Development Setup

```shell
mkvirtualenv mishkin_com
cd path/to/project/root
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
