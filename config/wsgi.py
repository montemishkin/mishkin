'''
WSGI configuration.

Exposes the WSGI callable as a module-level variable named `application`.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/howto/deployment/wsgi/
'''

# python imports
import os
# django imports
from django.core.wsgi import get_wsgi_application


# set the environment variable django uses to hunt down application settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mishkin_com.settings.live')

# build the application hook
application = get_wsgi_application()


# end of file
