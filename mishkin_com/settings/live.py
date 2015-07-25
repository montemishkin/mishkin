'''
Django settings for live deployment.
'''

# extend the base settings
from .base import *

# disable debugging support
DEBUG = False

# List of allowed hostnames
# https://docs.djangoproject.com/en/1.8/ref/settings/#std:setting-ALLOWED_HOSTS
ALLOWED_HOSTS = [
    'localhost',
    '10.0.0.29',
]

# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'mishkin_com',
        'USER': 'mishkin_com',
        'PASSWORD': 'monte',
        'HOST': 'localhost',
        'PORT': '',
    }
}


# end of file
