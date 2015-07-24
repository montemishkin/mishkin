'''
Django settings for live deployment.
'''

# extend the base settings
from .base import *

# disable debugging support
DEBUG = False

# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases
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
