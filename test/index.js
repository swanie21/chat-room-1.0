const assert = require('chai').assert

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

// user story 1
// there should be one input field for the chat message
// the input field should allow me to add a message

// user story 2
// if there is no text in the input field for the message
// the "send" button should be disabled

// user story 3
// after the message is input and the submit button is clicked
// the message should be posted onto the page into a section

// user story 4
// after the message is sent
// the input field should clear

// user story 5
// messages should be added to the page in reverse chronological order

// user story 6
// when a new message is added to the page
// there should be a delete button attached to the message
// and the message should be removed from the page

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
