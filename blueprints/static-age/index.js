var EmberRouterGenerator = require('ember-router-generator'),
    path = require('path'),
    fs = require('fs');

module.exports = {
  description: 'Install Static Age and its view templates',

  router: {
    path: path.join(options.root, 'app', 'router.js'),
    source: fs.readFileSync(this.path, 'utf-8'),
    routes: new EmberRouterGenerator(this.source)
  },

  afterInstall: function(options) {
    this.router.routes = this.router.routes.add('article', {
      path: '/:year/:month/:day/:title'
    });
    this.router.routes = this.router.routes.add('page', {
      path: '/:id'
    });
    fs.writeFileSync(this.router.path, this.router.routes.code());
  },

  afterUninstall: function() {
    this.router.routes = this.router.routes.remove('article', {
      path: '/:year/:month/:day/:title'
    });
    this.router.routes = this.router.routes.remove('page', {
      path: '/:id'
    });
    fs.writeFileSync(this.router.path, this.router.routes.code());
  }
};
