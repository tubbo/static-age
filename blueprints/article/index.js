var moment = require('moment'),
    titleize = require('underscore.string/titleize');

module.exports = {
  description: 'Generate a new article',

  fileMapTokens: function() {
    var name = [
      moment().format('YYYY-MM-DD'),
      options.dasherizedModuleName
    ].join('-');

    return {
      __templatepath__: function(options) {
        if (options.pod) {
          return path.join(options.podPath, name);
        }
        return 'templates';
      },
      __templatename__: function(options) {
        if (options.pod) {
          return 'template';
        }
        return name;
      }
    };
  },

  locals: function(options) {
    return {
      title: titleize(options.name),
      date: moment().format(),
      category: options.category,
      tags: options.tags
    }
  },

  availableOptions: [
    {
      name: 'category',
      type: String,
      default: 'gbs'
    },
    {
      name: 'tags',
      type: String,
      default: ''
    }
  ]
};
