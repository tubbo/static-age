import DS from 'ember-data';
import Ember from 'ember';
import Page from './page';

export default DS.Model.extend(Page, {
  // Extra JSON attributes
  date: DS.attr('date'),
  category: DS.attr('string'),
  tags: DS.attr('string'),

  // HTML preview content
  preview: null

  // Date format helper
  formattedDate: function() {
    return moment(this.get('date')).fromNow();
  }.property('date')
});
