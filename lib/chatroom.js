const Message = require('./message');
const $ = require('jquery');

var $chatMessage = $('#user-chat-input');
var $sendButton = $('#send-button');
var $messageContainer = $('#message-container');

var Chatroom = {

  allMessages: [],

    addMessagesToPage: function(text, id) {
    var message = new Message(text, id);
    var userMessage = message.generateUserHtml();
    var otherUserMessage = message.generateOtherUserHtml();
    $messageContainer.append(userMessage, otherUserMessage);
  },

  generateNewMessage: function() {
    this.allMessages.push(new Message(text, id));
  },

  storeTheMessage: function() {
    localStorage.setItem('allMessages', JSON.stringify(this.allMessages));
    this.retrieveMessages();
  },

  retrieveMessages: function() {
    var storedMessages = JSON.parse(localStorage.getItem('allMessages'));
    if (storedMessages) {
      this.allMessages = storedMessages.map(function(i) {
        return new Message(i.text, i.id);
      });
    }
    this.messagesToPage();
  },

  // messagesToPage: function() {
  //   $messageContainer.html('');
  //   $messageContainer.prepend(this.allMessages.map(function(i) {
  //     return i.htmlLayout();
  //   }));
  // },

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
    this.storeTheMessage();
  }
};


module.exports = Chatroom;
