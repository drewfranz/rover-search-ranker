const chai = require('chai');
const should = chai.should();

const searchScore = require('../../../lib/search-score');

describe("Search Score", function() {
    context("Create Search Score", function() {
        it("Should return the profile score if there are no ratings for the input provided.", function() {
            const record = {
                ratings: [],
                scores: { profile: 0.96 }
            };
            searchScore.getSearchScore(record.ratings,record.scores).should.be.eql(0.96);
        });

        it("Should equal the ratings score if 10 or more ratings exist for the input provided.", function() {
            const record = {
                ratings: [1,2,3,4,5,6,7,8,9,1],
                scores: { ratings: 4.6 }
            };
            searchScore.getSearchScore(record.ratings,record.scores).should.be.eql(4.6);
        });

        it("Should be a weighted average of the profile and ratings scores if 1-9 ratings exist for the input provided.", function() {
            const record = {
                ratings: [5,5,5,5,5,5,5,5,5],
                scores: { profile:2.5, ratings: 5 }
            };
            searchScore.getSearchScore(record.ratings,record.scores).should.be.eql(4.75);
        });
    });
});