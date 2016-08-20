const assert = require('assert');

describe('welcome page', function() {
  it('should have a title', function() {
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'Chatroom');
  });
});

describe('user message interaction', function() {
  // user story 1
  // there should be one input field for the chat message
  it('has an input form that I can set values in the form', function() {
    browser.url('/');
    var userChatInput = browser.element("#user-chat-input");
    // the input field should allow me to add a message
    userChatInput.setValue('hello there');
    assert.equal(userChatInput.getValue(), 'hello there');
  });

  it('should be able to add the message to the page', function() {
    browser.url('/');
    var userChatInput = browser.element("#user-chat-input");
    userChatInput.setValue('hi there');
    assert.equal(userChatInput.getValue(), 'hi there');
    browser.click('#send-button');
    var allMessages = browser.getText('.message-body');
    assert.equal(allMessages[0], 'hi there');
    assert.equal(allMessages[1], 'hi friend');
  });

  it('should be able to add another user message to the page', function() {
    browser.url('/');
    var userChatInput = browser.element("#user-chat-input");
    userChatInput.setValue('hi there');
    assert.equal(userChatInput.getValue(), 'hi there');
    browser.click('#send-button');
    userChatInput.setValue('hey buddy');
    browser.click('#send-button');
    var allMessages = browser.getText('.message-body');
    assert.equal(allMessages[0], 'hi there');
    assert.equal(allMessages[1], 'hi friend');
    assert.equal(allMessages[2], 'hey buddy');
    assert.equal(allMessages[3], 'hi friend');
  });

  it('should clear input field after clicking sent button', function() {
    browser.url('/');
    var userChatInput = browser.element("#user-chat-input");
    userChatInput.setValue('hi there');
    browser.click('#send-button');
    assert.equal(userChatInput.getValue(), '');
  });

  it('should disable the button if input field is empty', function() {
    browser.url('/');
    var userChatInput = browser.element("#user-chat-input");
    userChatInput.setValue('');
    assert.equal(browser.isEnabled('#send-button'), false);
    });

  it('should enable the button if input field is not empty', function() {
    browser.url('/');
    var userChatInput = browser.element("#user-chat-input");
    var sendButton = browser.element('#send-button');
    userChatInput.setValue('a');
    assert.equal(browser.isEnabled("#send-button"), true);
    });

  // it('should be able to be deleted from the page', function() {
  //   browser.url('/');
  //   var userChatInput = browser.element('#user-chat-input');
  //   userChatInput.setValue('hello');
  //   assert.equal(userChatInput.getValue(), 'hello')
  //   browser.click('#send-button');
  //   browser.click('#delete-button');
  //   assert.equal(allMessages[0], )
  // });
});

describe('other user message interaction', function() {
  it('should be a different color than the user message', function() {
    browser.url('/');
    var userChatInput = browser.element("#user-chat-input");
    userChatInput.setValue('hi there');
    browser.click('#send-button');
    var allMessages = browser.getText('article');
    var color = userChatInput.getCssProperty('color');
    console.log(color);
    assert.equal(allMessages[0].color, 'blue');
    console.log(color);
    assert.equal(allMessages[1].color, 'rgba(0, 0, 0, 1)');
  });
});

describe('text character counter', function() {
  it('should count the number of characters in the textarea', function() {
    browser.url('/');
    var textCounter = browser.element('#text-counter');
    var userChatInput = browser.element("#user-chat-input");
    userChatInput.setValue('hi there');
    assert.equal(textCounter.getValue.length, 8);
  });
});


// user story 2
// after the message is input and the submit button is clicked
// the message should be posted onto the page into a section

// user story 3
// after the message is sent
// the input field should clear

// user story 4
// if there is no text in the input field for the message
// the "send" button should be disabled

// user story 5
// messages should be added to the page in reverse chronological order

// user story 6
// when a new message is added to the page
// a delete button should be added
// when the delete button is clicked
// the message should be removed from the page

// user story 7
// only the author of the message can delete their own message

// user story 8
// the user can edit their own message

// user story 9
// the user cannot edit other people's messages

// user story 10
// the message input field should show a live count of characters

// user story 11
// when a message is submitted
// it should be saved into local storage
