const assert = require('chai').assert;
const Chatroom = require('../../lib/scripts/chatroom');
const $ = require('jquery');

describe('Chatroom', function() {
  context('Chatroom functions', function() {
    it('should have a function called generateNewMessage()', function() {
      assert.isFunction(Chatroom.generateNewMessage);
    });

    it('should have a function called storeTheMessage()', function() {
      assert.isFunction(Chatroom.storeTheMessage);
    });

    it('should have a function called retrieveMessages()', function() {
      assert.isFunction(Chatroom.retrieveMessages);
    });

    it('should have a function called renderTenMessagesToPage()', function() {
      assert.isFunction(Chatroom.renderTenMessagesToPage);
    });

    it('should have a function called removeMessage()', function() {
      assert.isFunction(Chatroom.removeMessage);
    });

    it('should have a function called findMessageById()', function() {
      assert.isFunction(Chatroom.findMessageById);
    });

    it('should have a function called editMessage()', function() {
      assert.isFunction(Chatroom.editMessage);
    });

    it('should have a function called toggleSendButton()', function() {
      assert.isFunction(Chatroom.toggleSendButton);
    });

    it('should have a function called clearInput()', function() {
      assert.isFunction(Chatroom.clearInput);
    });

    it('should have a function called resetCharacterCounter()', function() {
      assert.isFunction(Chatroom.resetCharacterCounter);
    });

    it('should have a function called renderAllMessagesToPage()', function() {
      assert.isFunction(Chatroom.renderAllMessagesToPage);
    });

    it('should have a function called sendButtonFunctionality()', function() {
      assert.isFunction(Chatroom.sendButtonFunctionality);
    });
  });

  context('Message array', function() {
    it('should be an array', function() {
      var allMessages = [];
      assert.isArray(allMessages);
    });
  });
});
