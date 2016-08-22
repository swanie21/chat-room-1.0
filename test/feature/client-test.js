const assert = require('assert');

describe('welcome page', function() {
  it('should have a title', function() {
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'Chatroom');
  });
});

describe('user message interaction', function() {
  it('has an input form that I can input text into the form', function() {
    browser.url('/');
    var userChatInput = browser.element("#user-chat-input");
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
    userChatInput.setValue('hello');
    assert.equal(userChatInput.getValue(), 'hello');
    browser.click('#send-button');
    userChatInput.setValue('hey buddy');
    browser.click('#send-button');
    var allMessages = browser.getText('.message-body');
    assert.equal(allMessages[0], 'hi there');
    assert.equal(allMessages[1], 'hi friend');
    assert.equal(allMessages[2], 'hello');
    assert.equal(allMessages[3], 'hi friend');
    assert.equal(allMessages[4], 'hey buddy');
    assert.equal(allMessages[5], 'hi friend');
  });

  it('should clear input field after clicking sent button', function() {
    browser.url('/');
    var userChatInput = browser.element("#user-chat-input");
    userChatInput.setValue('hi there');
    browser.click('#send-button');
    assert.equal(userChatInput.getValue(), '');
  });

  it('should disable the send button if input field is empty', function() {
    browser.url('/');
    var userChatInput = browser.element("#user-chat-input");
    userChatInput.setValue('');
    assert.equal(browser.isEnabled('#send-button'), false);
    });

  it('should enable the send button if input field is not empty', function() {
    browser.url('/');
    var userChatInput = browser.element("#user-chat-input");
    var sendButton = browser.element('#send-button');
    userChatInput.setValue('a');
    assert.equal(browser.isEnabled("#send-button"), true);
    });

  it('should be able to be removed from the page', function() {
    browser.url('/');
    var userChatInput = browser.element('#user-chat-input');
    userChatInput.setValue('hello');
    assert.equal(userChatInput.getValue(), 'hello');
    browser.click('#send-button');
    browser.click('.remove-button');
    var allMessages = browser.getText('.message-body');
    assert.equal(allMessages[0], 'hi friend');
  });
});

describe('edit button', function() {
  it('should be able to edit message area', function() {
    browser.url('/');
    var userChatInput = browser.element('#user-chat-input');
    userChatInput.setValue('hello');
    browser.click('#send-button');
    browser.click('.edit-button');
    var userEditInput = browser.element('.message-body');
    userEditInput.setValue('hey there');
    browser.click('#user-chat-input');
    var allMessages = browser.getText('.message-body');
    assert.equal(allMessages[0], 'hey there');
  });
});

describe('text character counter', function() {
  it('should count the number of characters in the textarea', function() {
    browser.url('/');
    var textCounter = browser.element('#text-counter');
    var userChatInput = browser.element("#user-chat-input");
    userChatInput.setValue('hi there');
    assert.equal(parseInt(browser.getText('#text-counter')), 8);
  });
});


// user story 1
// there should be one input field for the chat message
// the input field should allow me to add a message

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
