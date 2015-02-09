/* jshint node: true */
'use strict';

var compiler = require('./compiler');

module.exports = {
  name: 'static-age',

  toTree: function(tree, inputPath, outputPath) {
    compiler.build(inputPath, outputPath);
    return tree;
  }
};
