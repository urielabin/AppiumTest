var expect = require('chai').expect;
var FirstPage = require('../Pages/First.Page.js');
var SecondPage = require('../Pages/Second.Page.js');
var email = "test@mail.com";
var comment = "new comment";
var newMsg = "Now I have Focus";

describe('GuineaPig App Testing', function() {

  it("Verify app content", function() {
    expect(FirstPage.header.isVisible()).to.equal(true);
    expect(FirstPage.someContentText.isVisible()).to.equal(true);
    expect(FirstPage.divText.isVisible()).to.equal(true);
    expect(FirstPage.hypLink.isVisible()).to.equal(true);
    expect(FirstPage.yourCommentsSpan.isVisible()).to.equal(true);
    expect(FirstPage.commentsTextArea.isVisible()).to.equal(true);
    expect(FirstPage.submitButton.isVisible()).to.equal(true);
    expect(FirstPage.uncheckedBox.isVisible()).to.equal(true);
    expect(FirstPage.checkedBox.isVisible()).to.equal(true);
    expect(FirstPage.emailField.isVisible()).to.equal(true);
  });

  it("Set new value for no focus textbox", function() {
    FirstPage.fillNoFocusTxt(newMsg);
    expect(FirstPage.noFocustTxt.getText()).to.contain(newMsg);
  });
  it("Click Boxes", function() {
    FirstPage.clickCheckedBox();
    FirstPage.clickUncheckedBox();
    expect(FirstPage.checkedBox.getAttribute('value')).to.equal('0');
    expect(FirstPage.uncheckedBox.getAttribute('value')).to.equal('1');
    FirstPage.clickCheckedBox();
    FirstPage.clickUncheckedBox();
    expect(FirstPage.checkedBox.getAttribute('value')).to.equal('1');
    expect(FirstPage.uncheckedBox.getAttribute('value')).to.equal('0');
  });
  it("Add new comment Both Empty (Email/Comment)", function() {
    FirstPage.clickSubmit();
    expect(FirstPage.commentText.isVisible()).to.equal(false);
  });
  it("Add new comment with just email", function() {
    FirstPage.fillEmailField(email);
    FirstPage.clickSubmit();
    expect(FirstPage.commentText.isVisible()).to.equal(false);
  });
  it("Add new comment without email", function() {
    FirstPage.fillCommentField(comment);
    FirstPage.clickSubmit();
    expect(FirstPage.commentText.getText()).to.contain(comment);
  });
  it("Add new comment Both Fields (Email/Comment)", function() {
    FirstPage.fillEmailField(email);
    FirstPage.fillCommentField(comment)
    FirstPage.clickSubmit();
    expect(FirstPage.commentText.getText()).to.contain(comment);
  });

  it("Navigate to second page and return", function() {
    FirstPage.clickSecondTab();
    expect(SecondPage.checkedBoxSP.waitForVisible(3000)).to.equal(true);
    FirstPage.clickFirstTab();
    expect(FirstPage.header.isVisible()).to.equal(true);
  });

});
