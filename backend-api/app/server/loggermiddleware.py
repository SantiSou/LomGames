from werkzeug.wrappers import Request, Response, ResponseStream
import json


class LoggerMiddleware(object):
    '''
    Simple WSGI middleware
    '''

    def __init__(self, app):
        self.app = app
        self.userName = 'Prueba'
        self.password = '1234'

    def __call__(self, environ, start_response):
        request = Request(environ)

        userName = request.authorization.get('username')
        password = request.authorization.get('password')

        if userName == self.userName and password == self.password:
            environ['user'] = {'name': 'Prueba'}
            return self.app(environ, start_response)

        res = Response(u'Authorization failed',
                       mimetype='text/plain', status=401)
        return res(environ, start_response)
