/* jshint node: true */
'use strict';

module.exports = {
  name: 'static-age'

  included: function(app) {
    mergeTrees(staticFiles, {
      description: 'Static content files in Markdown',
      overwrite: true
    });
  },
};
