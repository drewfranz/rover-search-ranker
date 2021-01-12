const chai = require('chai');
const { Context } = require('mocha');
const should = chai.should();

const ratings = require('../../../lib/ratings');

describe("Gather Ratings", function() {
    context("Collect sitter ratings", function() {
        it("Should return an array of ratings if a valid input is provided.", function() {
            const name = 'Lauren B.';
            const records = [{"rating":"5","sitter":"Lauren B."}];
            ratings.getRatingsByName(name, records).should.be.eql([5]);
        });
    })
});