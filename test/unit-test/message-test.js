const assert = require('chai').assert;
const Message = require('../../lib/message');
const $ = require('jquery');

describe('Our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

describe('Message', function() {
  it('should create a message object', function() {
    var message = new Message();
    assert.isObject(message);
  });

  it('should have set values', function() {
    var message = new Message('hi there', 1471728575073, 'user-1');
    assert.equal(message.text, 'hi there');
    assert.equal(message.id, 1471728575073);
    assert.equal(message.user, 'user-1');
  });

});
