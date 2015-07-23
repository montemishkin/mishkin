'''
Base django settings common to both live and local deployment.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
'''

# python imports
import os
# local imports
import mishkin_com


# folder definitions
BASE_DIR = os.path.abspath(os.path.join(mishkin_com.root_dir, os.pardir))
APP_DIR = os.path.join(BASE_DIR, 'mishkin_com')
TEMPLATES_DIR = os.path.join(APP_DIR, 'templates')
RESOURCES_DIR = os.path.join(APP_DIR, 'assets')
STATIC_DIR = os.path.join(BASE_DIR, 'static')
UPLOADS_DIR = os.path.join(STATIC_DIR, 'uploads')


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '1$oqgpa0b_*$ng@(_k842^lrvj79+igwt0262gb#g3_xd+1t17'

ALLOWED_HOSTS = []


# Application definition

django_apps = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
)

third_party_apps = (
)

mishkin_com_apps = (
)

INSTALLED_APPS = mishkin_com_apps + third_party_apps + django_apps

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'mishkin_com.urls'

APPEND_SLASH = True


# Template configuration

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATES_DIR],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.contrib.auth.context_processors.auth',
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.template.context_processors.i18n',
                'django.template.context_processors.media',
                'django.template.context_processors.static',
                'django.template.context_processors.tz',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


# Static files (CSS, JavaScript, Images)

STATIC_URL = '/static/'
STATIC_ROOT = STATIC_DIR
MEDIA_ROOT = UPLOADS_DIR

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
)

STATICFILES_DIRS = (
    RESOURCES_DIR,
)


# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# end of file
