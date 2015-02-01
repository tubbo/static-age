import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  // JSON attributes
  title: DS.attr('string')

  // HTML content
  body: null
});
