const chai = require('chai');
const shoud = chai.should();

const profileScore = require('../../../lib/profile-score');

describe("Profile Score", function() {
    context("Create Profile Score", function() {
        it("Should return the correct score when a valid name is provided", function() {
            const sitter = "joe example";
            profileScore.getProfileScore(sitter).should.be.eql(1.53);
        });

        it("Should return no 0 when an empty string is provided.", function() {
            profileScore.getProfileScore('').should.be.eql(0);
        });

        it("Should return no 0 when no value is provided.", function() {
            profileScore.getProfileScore().should.be.eql(0);
        });
    });
});

