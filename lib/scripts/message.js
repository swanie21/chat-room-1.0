const $ = require('jquery');

function Message(text, id=Date.now(), user) {
  this.text = text || $('#user-chat-input').val();
  this.id = id;
  this.user = user;
}

Message.prototype.generateUserHtml = function() {
  if(this.user === 'user') {
    return $(`
      <article id=${this.id} class="user-message">
        <h3 id="user">${this.user}</h3>
        <p class="message-body" contenteditable="false">${this.text}</p>
        <section class='user-buttons'>
          <button class="edit-button"></button>
          <button class="remove-button"></button>
        </section>
      </article> `);
  } else {
    return $(`
      <article id=${this.id} class="other-user-message">
        <h3 id="friend">${this.user}</h3>
        <p class="message-body">${this.text}</p>
      </article>
    `);
  }
};

module.exports = Message;
