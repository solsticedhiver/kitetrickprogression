import os
import jinja2
import webapp2

maindir = os.path.dirname(__file__)
templatedir = os.path.join(maindir, 'html')
jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(templatedir))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        # only serve template .djt in html directory
        # when called with .html extension
        path = self.request.path.strip('/')
        if path == '':
            path = 'index.html'
        fullpath = os.path.join(templatedir, path).replace('.html', '.djt')
        filename = os.path.basename(fullpath)
        if not os.path.exists(fullpath) or not path.endswith('.html'):
            self.error(404)
            template = jinja_environment.get_template('error.djt')
            self.response.write(template.render({'content': '''<h1>Error 404</h1>
<p>The page has not been found.</p>'''}))
            return

        template = jinja_environment.get_template(filename)
        self.response.write(template.render())

app = webapp2.WSGIApplication( [
                    (r'/.*', MainHandler),
                    ])
