const Message = require('./message');
const $ = require('jquery');

var $chatMessage = $('#user-chat-input');
var $sendButton = $('#send-button');

var Chatroom = {

  allMessages: [],




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
//
// function clearInput() {
//   $chatMessage.val('');
//   $chatMessage.focus();
// }
//
// function enableSendButton() {
//   if ($chatMessage.val() !== '') {
//     $sendButton.prop('disabled', false);
//   } else {
//     $sendButton.prop('disabled', true);
//   }
// }


//
//   // generateNewMessage: function(body) {
//   //   this.allMessages.push(new Message($chatMessage.val()));
//   // },
// // };
//

module.exports = Chatroom;
