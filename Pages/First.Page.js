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
      return browser.element('//XCUIElementTypeStaticText[@name="I am some page content "]');
    }
  },
  divText: {
    get: function() {
      return browser.element('//XCUIElementTypeStaticText[@name="I am a div"]');
    }
  },
  hypLink: {
    get: function() {
      return browser.element('//XCUIElementTypeLink[@name="i am a link"]');
    }
  },
  threeTimesText: {
    get: function() {
      return browser.element('#i appear 3 times')
    }
  },
  noFocustTxt: {
    get: function() {
      return browser.element('#i_am_a_textbox')
    }
  },
  yourCommentsSpan: {
    get: function() {
      return browser.element('//XCUIElementTypeStaticText[@name="Your comments:"]');
    }
  },
  commentsTextArea: {
    get: function() {
      return browser.element('#comments');
    }
  },
  submitButton: {
    get: function() {
      return browser.element('#submit');
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
  emailSpan: {
    get: function() {
      return browser.element('#Email:');
    }
  },
  emailField: {
    get: function() {
      return browser.element('#fbemail');
    }
  },
  commentsSpan: {
    get: function() {
      return browser.element('#Comments:');
    }
  },
  commentText: {
    get: function() {
      return browser.element('//XCUIElementTypeStaticText[@name="new comment"]');
    }
  },
  clientTimeSpan: {
    get: function() {
      return browser.element('#Client time:');
    }
  },
  firstPageBtn: {
    get: function() {
      return browser.element('#First');
    }
  },
  secondPageBtn: {
    get: function() {
      return browser.element('#Second');
    }
  },

  // TEST ACTIONS
  open: {
    value: function() {
      Page.open.call(this, 'home');
    }
  },
  clickSubmit: {
    value: function() {
      this.submitButton.click();
    }
  },
  clearEmailField: {
    value: function() {
      this.emailField.clearValue();
    }
  },
  fillEmailField: {
    value: function(email) {
      this.emailField.setValue(email);
    }
  },
  clearCommentField: {
    value: function() {
      this.commentsTextArea.clearValue();
    }
  },
  fillCommentField: {
    value: function(comment) {
      this.commentsTextArea.setValue(comment);
    }
  },
  clickUncheckedBox: {
    value: function() {
      this.uncheckedBox.click();
    },
  },
  clickCheckedBox: {
    value: function() {
      this.checkedBox.click();
    },
  },
  getCheckedBoxValue: {
    value: function() {
      this.checkedBox.getAttribute('value');
    },
  },
  clickFirstTab: {
    value: function() {
      this.firstPageBtn.click();
    }
  },
  clickSecondTab: {
    value: function() {
      this.secondPageBtn.click();
    }
  },
  clearNoFocusTxt: {
    value: function() {
      this.noFocustTxt.clearValue();
    }
  },
  fillNoFocusTxt: {
    value: function(string) {
      this.noFocustTxt.setValue(string);
    }
  }
});

module.exports = HomePage;
