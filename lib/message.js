const $ = require('jquery');

var $chatMessage = $('#user-chat-input');

function Message(text, id=Date.now()) {
  this.text = text || $chatMessage.val();
  this.id = id;
}

Message.prototype.generateUserHtml = function() {
  return $(`
    <article id=${this.id} class="user-message">
      <p class="message-body" contenteditable="true">${this.text}</p>
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    </article>
  `);
};

Message.prototype.generateOtherUserHtml = function() {
  return $(`
    <article class="other-user-message">
      <p class="message-body">hi friend</p>
    </article>
  `);
};

module.exports = Message;
