const Message = require('./message');
const Chatroom = require('./chatroom');
const $ = require('jquery');

$(document).ready(function() {
  Chatroom.pageLoad();
});

var $chatMessage = $('#user-chat-input');
var $sendButton = $('#send-button');

function toggleSendButton() {
  if ($chatMessage.val() !== '') {
    $sendButton.prop('disabled', false);
  } else {
    $sendButton.prop('disabled', true);
  }
}

function clearInput() {
  $chatMessage.val('');
  $chatMessage.focus();
}

function resetCharacterCounter() {
  return $('#text-counter').text(0);
}

$sendButton.on('click', function(e) {
  e.preventDefault();
  Chatroom.generateNewMessage($chatMessage.val());
  Chatroom.retrieveMessages();
  Chatroom.storeTheMessage();
  Chatroom.renderMessagesToPage();
  clearInput();
  toggleSendButton();
  resetCharacterCounter();
});

$chatMessage.on('keyup', function() {
  toggleSendButton();
});

$chatMessage.keyup(function() {
  var length = $(this).val().length;
  $('#text-counter').text(length);
});

$('#message-container').on('click', '.delete-button', function() {
  var id = $(this).parents('.user-message').attr('id');
  Chatroom.removeMessage(id);
});
