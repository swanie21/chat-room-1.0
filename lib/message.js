const $ = require('jquery');

function Message(text, id=Date.now()) {
  this.text = text;
  this.id = id;
}

module.exports = Message;
