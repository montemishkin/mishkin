#!/usr/bin/env python3

'''
Django task manager for development stage management.
'''

# when run from command line
if __name__ == '__main__':
    # python imports
    import os
    import sys
    # django imports
    from django.core.management import execute_from_command_line

    # load development django settings
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mishkin_com.settings.local')

    # perform default action
    execute_from_command_line(sys.argv)


# end of file
