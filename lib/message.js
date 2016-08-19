const $ = require('jquery');

function Message(text, id=Date.now()) {
  this.text = $('#user-chat-input').val();
  this.id = id;
}

Message.prototype.generateUserHtml = function() {
  return $(`
    <article class="user-message">
      <p class="message-body" contenteditable="true">${this.text}</p>
      <button id="edit-button">Edit</button>
      <button id="delete-button">Delete</button>
    </article>
  `);
};

Message.prototype.generateOtherUserHtml = function() {
  return $('#message-container').append(`
    <article class="other-user-message">
      <p class="message-body">hi friend</p>
    </article>
  `);
};

module.exports = Message;
