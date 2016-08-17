// const Message = require('./message');
const $ = require('jquery');

// $('#send-button').on('click', function(event) {
//   event.preventDefault();
//   Message.messageToPage();
// });

var $chatMessage = $('#user-chat-input');

$(document).ready(function() {
  $('#send-button').on('click', function(e) {
    e.preventDefault();
    formatIdeas();
    clearInput();
    enableSendButton();
  });
});

function createIdea() {
  return $(`
    <article class="message">
      <p class="message-body">${$chatMessage.val()}</p>
    </article>
  `);
};

function formatIdeas() {
  var idea = createIdea();
  $('#message-container').append(idea);
};

function clearInput() {
  $chatMessage.val('');
  $chatMessage.focus();
};

function enableSendButton() {
  if ($chatMessage.val() !== '') {
    $('#send-button').prop('disabled', false);
  } else {
    $('#send-button').prop('disabled', true);
  }
}

$chatMessage.on('keyup', function() {
  enableSendButton();
});
