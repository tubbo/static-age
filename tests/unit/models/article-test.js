import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('article', 'Article', {
  // Specify the other units that are required for this test.

});

test('formats date', function() {
  var model = this.subject({ date: moment.format('YYYY-MM-DD') });

  ok(model.get('formattedDate'));
});
