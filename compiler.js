/**
 * Top-level namespace for compiler stuff.
 */

var Collection = require('./compiler/collection');

module.exports = {
  name: 'StaticAgeCompiler',
  ext: 'md',
  toTree: function(app) {
    return new Collection({ key: 'articles' });
  }
};
