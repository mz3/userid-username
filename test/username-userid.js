'use strict';

process.env.NODE_ENV = 'test';

const assert = require('assert');
const UseridToUsername = require('../username-userid');

describe('UseridToUsername', function() {

  it("uid 0 should return 'root' (promise api)", function() {
    return UseridToUsername(0).then(function(username) {
      assert.equal(username, 'root');
    });
  });

  it("uid 0 should return 'root' (callback api)", function(done) {
    UseridToUsername(0, function(err, username) {
      assert.equal(username, 'root');
      done(err);
    });
  });

  it("should fail invalid userid", function(done) {
    UseridToUsername("-1asdf").then(function(username) {

      // this should not run for invalid userid
      done(new Error("Did not fail invalid userid"));

    }).catch(function(err) {

      // expect an error
      assert(err);

      // finish
      done();

    });
  });

});
