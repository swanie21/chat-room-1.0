const Chatroom = require('./chatroom');
const $ = require('jquery');

var $chatMessage = $('#user-chat-input');
var $sendButton = $('#send-button');
var $messageContainer = $('#message-container');

$(document).ready(function() {
  Chatroom.renderMessages();
});

$sendButton.on('click', function(e) {
  e.preventDefault();
  Chatroom.renderMessages();
  Chatroom.sendButtonFunctionality();
});

$chatMessage.on('keyup', function() {
  Chatroom.toggleSendButton();
});

$chatMessage.keyup(function() {
  var length = $(this).val().length;
  $('#text-counter').text(length);
});

$messageContainer.on('click', '.remove-button', function() {
  var id = $(this).parents('.user-message').attr('id');
  Chatroom.removeMessage(id);
});

$messageContainer.on('focusout', '.message-body', function() {
  var id = $(this).parents('.user-message').attr('id');
  var newText = $(this).text();
  Chatroom.editMessage(id, newText);
});

$messageContainer.on('keyup', '.message-body', function(e) {
  if(e.which == 13) {
    $(this).focusout();
  }
});
