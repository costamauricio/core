var expect = require("chai").expect;
var path = require("path");

var cvs = require("../../CVS");

describe("Login", function() {

  describe("Valid User", function() {

    it ("Login with password", function(done) {

      var pserver = ":pserver:cvsuser@localhost:/var/cvsroot",
          repo = new cvs(pserver);

      repo.login("").then(function() {
        return done();
      }).catch(done)

    })

    it ("Login without password", function(done) {
    
    })
  })


});
