import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-project20200713-phone', 'Unit | Serializer | i-i-s-test-project20200713-phone', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test-project20200713-phone',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
