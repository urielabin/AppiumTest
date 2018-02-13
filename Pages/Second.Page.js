var Page = require('../Base/Page.js');

var SecondPage = Object.create(Page, {

  //APP ELEMENTS
  headerSP: {
    get: function() {
      return browser.element('//XCUIElementTypeStaticText[@name="This page is a Selenium sandbox"]');
    }
  },
  someContentTextSP: {
    get: function() {
      return browser.element('//XCUIElementTypeStaticText[@name="I am some page content"]');
    }
  },
  divTextSP: {
    get: function() {
      return browser.element('//XCUIElementTypeStaticText[@name="I am a div"]');
    }
  },
  hypLinkSP: {
    get: function() {
      return browser.element('//XCUIElementTypeStaticText[@name="i am a link"]');
    }
  },
  threeTimesTextSP: {
    get: function() {
      return browser.element('(//XCUIElementTypeStaticText[@name="i appear 3 times"])[1]')
    }
  },
  noFocustTxtSP: {
    get: function() {
      return browser.element('//XCUIElementTypeOther[@name="I am a page title - Sauce Labs"]/XCUIElementTypeOther[8]/XCUIElementTypeTextField')
    }
  },
  yourCommentsSpanSP: {
    get: function() {
      return browser.element('//XCUIElementTypeStaticText[@name="Your comments:"]');
    }
  },
  commentsTextAreaSP: {
    get: function() {
      return browser.element('//XCUIElementTypeOther[@name="I am a page title - Sauce Labs"]/XCUIElementTypeOther[12]/XCUIElementTypeTextView');
    }
  },
  submitButtonSP: {
    get: function() {
      return brownser.element('//XCUIElementTypeButton[@name="send"]');
    }
  },
  uncheckedBoxSP: {
    get: function() {
      return browser.element('//XCUIElementTypeOther[@name="I am a page title - Sauce Labs"]/XCUIElementTypeOther[9]/XCUIElementTypeSwitch[1]');
    }
  },
  checkedBoxSP: {
    get: function() {
      return browser.element('//XCUIElementTypeOther[@name="I am a page title - Sauce Labs"]/XCUIElementTypeOther[9]/XCUIElementTypeSwitch[2]');
    }
  },
  emailSpanSP: {
    get: function() {
      return browser.element('//XCUIElementTypeStaticText[@name="Email:"]');
    }
  },
  emailFieldSP: {
    get: function() {
      return browser.element('//XCUIElementTypeOther[@name="I am a page title - Sauce Labs"]/XCUIElementTypeOther[11]/XCUIElementTypeTextField');
    }
  },
  commentsSpanSP: {
    get: function() {
      return browser.element('//XCUIElementTypeStaticText[@name="Comments:"]:');
    }
  },
  commentTextSP: {
    get: function() {
      return browser.element('#new Comment');
    }
  },
  clientTimeSpanSP: {
    get: function() {
      return browser.element('//XCUIElementTypeStaticText[@name="Client time:"]');
    }
  },
  firstPageBtnSP: {
    get: function() {
      return browser.element('#First');
    }
  },
  secondPageBtnSP: {
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
      this.submitButtonSP.click();
    }
  },
  clearEmailField: {
    value: function() {
      this.emailFieldSP.clearValue();
    }
  },
  fillEmailField: {
    value: function(email) {
      this.emailFieldSP.setValue(email);
    }
  },
  clearCommentField: {
    value: function() {
      this.commentsTextAreaSP.clearValue();
    }
  },
  fillCommentField: {
    value: function(comment) {
      this.commentsTextAreaSP.setValue(comment);
    }
  },
  clickUncheckedBox: {
    value: function() {
      this.uncheckedBoxSP.click();
    },
  },
  clickCheckedBox: {
    value: function() {
      this.checkedBoxSP.click();
    },
  },
  getCheckedBoxValue: {
    value: function() {
      this.checkedBoxSP.getAttribute('value');
    },
  },
  clickFirstTab: {
    value: function() {
      this.firstPageBtn.click();
    }
  },
  clearNoFocusTxt: {
    value: function() {
      this.noFocustTxtSP.clearValue();
    }
  },
  fillNoFocusTxt: {
    value: function(string) {
      this.noFocustTxtSP.setValue(string);
    }
  }
});

module.exports = SecondPage;
