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
  });
});

function createIdea(){
  return $(
    "<article>"
    + $('#user-chat-input').val()
    + "</article>"
  );
}
function formatIdeas(){
  var idea = createIdea();
  $('#message-container').append(idea);
}

function clearInput() {
  $chatMessage.val('');
}
