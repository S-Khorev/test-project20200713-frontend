import { Serializer as PhoneSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-project20200713-phone';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PhoneSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
