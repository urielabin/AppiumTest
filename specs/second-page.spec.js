var expect = require('chai').expect;
var FirstPage = require('../pages/first.Page.js');
var SecondPage = require('../pages/first.Page.js');
var email = "test@mail.com";
var comment = "new comment";
var newMsg = "Now I have Focus";

describe('GuineaPig App Testing', function() {

  it("Verify app content", function() {
    FirstPage.clickSecondTab();
    expect(SecondPage.header.isVisible()).to.equal(true);
    expect(SecondPage.someContentText.isVisible()).to.equal(true);
    expect(SecondPage.divText.isVisible()).to.equal(true);
    expect(SecondPage.hypLink.isVisible()).to.equal(true);
    expect(SecondPage.yourCommentsSpan.isVisible()).to.equal(true);
    expect(SecondPage.commentsTextArea.isVisible()).to.equal(true);
    expect(SecondPage.submitButton.isVisible()).to.equal(true);
    expect(SecondPage.uncheckedBox.isVisible()).to.equal(true);
    expect(SecondPage.checkedBox.isVisible()).to.equal(true);
    expect(SecondPage.emailField.isVisible()).to.equal(true);
  });

  it("Set new value for no focus textbox", function(){
    SecondPage.fillNoFocusTxt(newMsg);
    FirstPage.hideDeviceKeyboard();
    expect(SecondPage.noFocustTxt.getText()).to.contain(newMsg);
  });
  it("Click Boxes", function() {
    SecondPage.clickCheckedBox();
    SecondPage.clickUncheckedBox();
    expect(SecondPage.checkedBox.getAttribute('value')).to.equal('0');
    expect(SecondPage.uncheckedBox.getAttribute('value')).to.equal('1');
    SecondPage.clickCheckedBox();
    SecondPage.clickUncheckedBox();
    expect(SecondPage.checkedBox.getAttribute('value')).to.equal('1');
    expect(SecondPage.uncheckedBox.getAttribute('value')).to.equal('0');
  });
  it("Add new comment Both Empty (Email/Comment)", function() {
    SecondPage.clickSubmit();
    expect(SecondPage.commentText.isVisible()).to.equal(false);
  });
  it("Add new comment with just email", function() {
    SecondPage.fillEmailField(email);
    FirstPage.hideDeviceKeyboard();
    SecondPage.clickSubmit();
    expect(SecondPage.commentText.isVisible()).to.equal(false);
  });
  it("Add new comment without email", function() {
    SecondPage.fillComment(comment);
    FirstPage.hideDeviceKeyboard();
    SecondPage.clickSubmit();
    expect(SecondPage.commentText.getText()).to.contain(comment);
  });
  it("Add new comment Both Fields (Email/Comment)", function() {
    SecondPage.fillEmailField(email);
    SecondPage.fillComment(comment);
    FirstPage.hideDeviceKeyboard();
    SecondPage.clickSubmit();
    expect(SecondPage.commentText.getText()).to.contain(comment);
  });

  it("Navigate to second page", function() {
    SecondPage.clickFirstTab();
    expect(FirstPage.header.isVisible()).to.equal(true);
  });

});
