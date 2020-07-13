import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-project20200713-contact-type', 'Unit | Model | i-i-s-test-project20200713-contact-type', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test-project20200713-contact-type',
    'model:i-i-s-test-project20200713-contact',
    'model:i-i-s-test-project20200713-phone-type',
    'model:i-i-s-test-project20200713-phone',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
