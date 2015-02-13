import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('date'),
  category: DS.attr('string'),
  tags: DS.attr('string'),

  body: null,
  preview: null,

  formattedDate: function() {
    return moment(this.get('date')).fromNow();
  }.property('date')
});
