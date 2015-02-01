import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  find: function(store, type, id, record) {
    var resource = this._super(store, type, id, record);
    this._content(type, resource, { format: '.preview.html' });
    return resource;
  },

  findAll: function(store, type) {
    var resources = this._super(store, type);
    resources.forEach(function(resource) {
      this._content(type, resource, { format: '.preview.html' });
    });
    return resources;
  },

  ajax: function(url, type, options) {
    var format = options.format || 'json';
    return this._super(url+'.'+format, type, options);
  },

  _content: function(type, resource, options) {
    var url = this.buildURL(type.typeKey)+options.format;
    var property = (url.match(/preview/) ? 'preview' : 'body';

    Ember.$.get(url, function(html) {
      resource.set(property, new Ember.Handlebars.SafeString(html));
    });
  }
});
