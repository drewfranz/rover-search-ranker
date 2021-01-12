const chai = require('chai');
const shoud = chai.should();

const ratingsScore = require('../../../lib/ratings-score');

describe("Ratings Score", function() {
    context("Create Ratings Score", function() {
        it("Should return the correct score when a valid name is provided", function() {
            const sitter = {'cooper p': {
                ratings: [ 1, 4, 5, 1 ]
              }
            };
            ratingsScore.getRatingsScore(sitter['cooper p'].ratings).should.be.eql(2.75);
        });

        it("Should return no 0 when an empty string is provided.", function() {
            ratingsScore.getRatingsScore('').should.be.eql(0);
        });

        it("Should return 0 when no value is provided.", function() {
            ratingsScore.getRatingsScore().should.be.eql(0);
        });
    });
});