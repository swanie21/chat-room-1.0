const Chatroom = require('./chatroom');
const $ = require('jquery');

var $chatMessage = $('#user-chat-input');
var $sendButton = $('#send-button');
var $messageContainer = $('#message-container');

$(document).ready(function() {
  Chatroom.renderTenMessages();
});

$sendButton.on('click', function(e) {
  e.preventDefault();
  Chatroom.renderTenMessages();
  Chatroom.sendButtonFunctionality();
});

$chatMessage.on('keyup', function() {
  Chatroom.toggleSendButton();
});

$('#show-all-messages-button').on('click', function() {
  Chatroom.retrieveAllMessages();
  Chatroom.renderAllMessagesToPage();
});

$chatMessage.keyup(function() {
  var length = $(this).val().length;
  $('#text-counter').text(length);
});

$messageContainer.on('click', '.remove-button', function() {
  var id = $(this).parents('.user-message').attr('id');
  Chatroom.removeMessage(id);
});

$messageContainer.on('click', '.edit-button', function() {
  $(this).parent().siblings('.message-body').prop('contenteditable', true).focus();
});

$messageContainer.on('blur', '.message-body', function() {
  var id = $(this).parents('.user-message').attr('id');
  var newText = $(this).text();
  Chatroom.editMessage(id, newText);
});

$messageContainer.on('keyup', '.message-body', function(e) {
  if(e.which == 13) {
    $(this).focusout();
  }
});
