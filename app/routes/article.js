import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('article', this._resolveArticleID(params));
  },

  afterModel: function(article, params) {
    var articleID = article.get('id');
    if (articleID) {
      $.get('/articles/'+articleID+'.html', function(html) {
        article.set('body', new Ember.Handlebars.SafeString(html));
      });
    }
  },

  _resolveArticleID: function(params) {
    return [
      params.year,
      params.month,
      params.day,
      params.title
    ].join('-');
  }
});
