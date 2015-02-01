var titleize = require('underscore.string/titleize');

module.exports = {
  description: 'Generates a new page',

  locals: function(options) {
    return {
      title: titleize(options.name)
    }
  }
};
