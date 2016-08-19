const Message = require('./message');
const Chatroom = require('./chatroom');
const $ = require('jquery');

// $(document).ready(function() {
// });

var $chatMessage = $('#user-chat-input');
var $sendButton = $('#send-button');

$('#send-button').on('click', function(e) {
  e.preventDefault();
  Chatroom.addMessagesToPage();
  clearInput();
  enableSendButton();
});

$chatMessage.on('keyup', function() {
  enableSendButton();
});

$chatMessage.keyup(function() {
  var length = $(this).val().length;
  $('#text-counter').text(length);
});

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

// function createIdea() {
//   return $(`
//     <article class="user-message">
//       <p class="message-body">${$chatMessage.val()}</p>
//     </article>
//   `);
// }
//
// function createIdeaTwo() {
//   return $('#message-container').append(`
//     <article class="other-user-message">
//       <p class="message-body">hi friend</p>
//     </article>
//   `);
// }
//
// function formatIdeas() {
//   var idea = createIdea();
//   $('#message-container').append(idea);
// }

// setInterval(createIdeaTwo, 5000);
