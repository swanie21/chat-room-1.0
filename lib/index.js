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

$('#send-button').on('click', function(e) {
  e.preventDefault();
  Chatroom.generateNewMessage();
  Chatroom.storeTheMessage();
  Chatroom.retrieveMessages();
  Chatroom.addMessagesToPage();
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

// setInterval(createIdeaTwo, 5000);
