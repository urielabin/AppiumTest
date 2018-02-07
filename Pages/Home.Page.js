var Page = require('../Base/Page.js');

var HomePage = Object.create(Page, {

  //APP ELEMENTS
  header: {
    get: function() {
      return browser.element('#h1Text');
    }
  },
  someContentText: {
    get: function() {
      return browser.element('#I am some page content');
    }
  },
  divText: {
    get: function() {
      return browser.element('#I am a div');
    }
  },
  hypLink: {
    get: function() {
      return browser.element('#i am a link');
    }
  },
  yourComments: {
    get: function() {
      return browser.element('#Your comments');
    }
  },
  commentsTextArea: {
    get: function() {
      return browser.element('#comments');
    }
  },
  submitButton: {
    get: function() {
      return brownser.element('#submit');
    }
  },
  uncheckedBox: {
    get: function() {
      return browser.element('#unchecked_checkbox');
    }
  },
  checkedBox: {
    get: function() {
      return browser.element('#checked_checkbox');
    }
  },
  emailField: {
    get: function() {
      return browser.element('#fbemail');
    }
  },
  commentText: {
    get: function() {
      return browser.element('#new Comment');
    }
  },

// TEST ACTIONS
  open: {
    value: function() {
      Page.open.call(this, 'home');
    }
  },
  submit: {
    value: function() {
      this.submitButton.click();
    }
  },
  fillEmailField:{
    value: function(){
      this.mailField.setValue('test@email.com');
    }
  },
  fillComment:{
    value: function(){
      this.commentsTextArea.setValue('new comment');
    }
  }
});

module.exports = HomePage;
