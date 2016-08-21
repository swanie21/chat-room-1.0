const assert = require('chai').assert;
const Message = require('../../lib/scripts/message');
const $ = require('jquery');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

describe('Message', function() {
  it('should create a message', function() {
    var message = new Message();
    assert.isObject(message);
  });

  it('message should have text', function() {
    var message = new Message('hi there', id);
    assert.equal(message.text, 'hi there');
  });

  it('message should have an id', function() {
    var message = new Message('hi there', id);
    assert.equal(message.id, 'hi there');
  });
});
