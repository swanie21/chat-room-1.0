const Message = require('./message');
const $ = require('jquery');

var $chatMessage = $('#user-chat-input');
var $sendButton = $('#send-button');
var $messageContainer = $('#message-container');

var Chatroom = {

  allMessages: [],

  renderMessagesToPage: function(text, id) {
    var message = new Message(text, id);
    var userMessage = message.generateUserHtml();
    var otherUserMessage = message.generateOtherUserHtml();
    $messageContainer.append(userMessage, otherUserMessage);
  },
  // for (var i = 0; var i < this.allMessages.length; i++) {
  //   this.renderMessagesToPage(this.allMessages[i])
  // }

  generateNewMessage: function(text, id) {
    this.allMessages.push(new Message(text, id));
    this.storeTheMessage();
  },

  storeTheMessage: function() {
    localStorage.setItem('allMessages', JSON.stringify(this.allMessages));
  },

  retrieveMessages: function() {
    var storedMessages = JSON.parse(localStorage.getItem('allMessages'));
    if (storedMessages) {
      this.allMessages = storedMessages.map(function(m) {
        return new Message(m.text, m.id);
      });
    }
  },

  findMessageById: function(id) {
    return this.allMessages.find(function(message) {
      return message.id === id;
    });
  },

  removeMessage: function(id) {
    id = parseInt(id);
    this.allMessages = this.allMessages.filter(function(i) {
      return i.id !== id;
    });
    this.storeTheMessage();
  },

  // editMessage: function(id, newText) {
  //   id = parseInt(id);
  //   var message = this.findMessageById(id);
  //   message.text = newText;
  //   this.storeTheMessage();
  // },

  pageLoad: function() {
    this.retrieveMessages();
    // this.renderMessagesToPage();
    this.storeTheMessage();
  }
};

module.exports = Chatroom;
