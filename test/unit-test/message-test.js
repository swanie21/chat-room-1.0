const assert = require('chai').assert;
const Message = require('../../message');
const $ = require('jquery');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

describe('messages', function() {
  it('should have a function called createIdea()', function() {
    assert.isFunction(createIdea);
  });

  it('should have a function called formatIdeas()', function() {
    assert.isFunction(formatIdeas);
  });

  it('should clear input field after send button is hit', function() {
    var $chat-message = $('user-chat-input');

  })
});

describe('text character counter', function() {

})
