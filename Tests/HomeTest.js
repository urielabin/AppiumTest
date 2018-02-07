var expect = require('chai').expect;
var HomePage = require('../Pages/Home.Page.js');


describe('GuineaPig App Testing', function() {
  it("Verify app Header", function() {
    expect(HomePage.header.isVisible()).to.equal(true);
  });

  it("Verify app content", function() {
    expect(HomePage.someContentText.isVisible()).to.equal(true);
    expect(HomePage.divText.isVisible()).to.equal(true);
    expect(HomePage.hypLink.isVisible()).to.equal(true);
    expect(HomePage.yourComments.isVisible()).to.equal(true);
    expect(HomePage.commentsTable.isVisible()).to.equal(true);
    expect(HomePage.submitButton.isVisible()).to.equal(true);
    expect(HomePage.uncheckedBox.isVisible()).to.equal(true);
    expect(HomePage.checkedBox.isVisible()).to.equal(true);
    expect(HomePage.emailField.isVisible()).to.equal(true);
  });

  it("Add new comment", function() {
    HomePage.fillEmailField();
    HomePage.fillComment();
    HomePage.submit();
    expect(HomePage.commentText.getText()).to.contain('new comment');
  });
});
