var $chatMessage = $('#user-chat-input');
var $messageContainer = $('#message-container');

function Message(body) {
  this.body = body
}

var ChatterBox = {

  allMessages: [],

  // generateNewMessage: function(body) {
  //   this.allMessages.push(new Message($chatMessage.val()));
  // },

  messageToPage: function() {
    var message = $chatMessage.val();
    debugger;
    $messageContainer.append $(
      `<article class="message">
        <p class="message-body">${message}</p>
      </article>
    `);
  }
};

module.exports = Message;
