const message = require('./message');
const $ = require('jquery');

$(document).ready(function() {
  $('#send-button').on('click', function(e) {
    e.preventDefault();
    formatIdeas();
    createIdeaTwo();
    clearInput();
    enableSendButton();
  });
});

var $chatMessage = $('#user-chat-input');
var $sendButton = $('#send-button');

function createIdea() {
  return $(`
    <article class="user-message">
      <p class="message-body">${$chatMessage.val()}</p>
    </article>
  `);
}

function createIdeaTwo() {
  return $('#message-container').append(`
    <article class="other-user-message">
      <p class="message-body">hi friend</p>
    </article>
  `);
}

function formatIdeas() {
  var idea = createIdea();
  $('#message-container').append(idea);
}

function clearInput() {
  $chatMessage.val('');
  $chatMessage.focus();
}

function enableSendButton() {
  if ($chatMessage.val() !== '') {
    $sendButton.prop('disabled', false);
  } else {
    $sendButton.prop('disabled', true);
  }
}

$chatMessage.on('keyup', function() {
  enableSendButton();
});

$chatMessage.keyup(function() {
  var length = $(this).val().length;
  $('#text-counter').text(length);
});

// setInterval(createIdeaTwo, 5000);
