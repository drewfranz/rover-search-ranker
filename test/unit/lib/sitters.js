const chai = require('chai');
const { Context } = require('mocha');
const should = chai.should();

const sitters = require('../../../lib/sitters');

describe("Sitters", function() {
    context("Collect sitters data", function() {
        it("Should create an object where the keys are sitter names if a valid input is provided.", function() {
            const records = [
                {"sitter":"Lauren B.","sitter_email":"test@example.com"},
                {"sitter":"Joe Example","sitter_email":"test@example.com"}
            ];
            sitters.getListOfSittersByName(records).should.be.eql(
                {
                    'joe example': {
                        'original_name': 'Joe Example',
                        'email': 'test@example.com'
                    },
                    'lauren b': {
                        'original_name': 'Lauren B.',
                        'email': 'test@example.com'
                    }
                }
            );
        });

        it("Should create an object where the keys are sitter names only when an input with multiple keys are provided.", function() {
            const records = [
                {"sitter":"Lauren B.","badKey": "foo","sitter_email":"test@example.com"},
                {"sitter":"Joe Example","anotherBadKey": "bar","sitter_email":"test@example.com"}
            ];
            sitters.getListOfSittersByName(records).should.be.eql(
                {
                    'joe example': {
                        'original_name': 'Joe Example',
                        'email': 'test@example.com'
                    },
                    'lauren b': {
                        'original_name': 'Lauren B.',
                        'email': 'test@example.com'
                    }
                }
            );
        });

        it("Should create an empty object when an input with no sitter names are provided.", function() {
            const records = [{"badKey": "foo"},{"anotherBadKey": "bar"}];
            sitters.getListOfSittersByName(records).should.be.eql({});
        });
    });

    context("Get count of letters in a name", function() {
        it("Should return the correct number of distinct letters in the English alphabet when a correct value is provided.", function() {
            const name = "Joe Example";
            sitters.getDistinctLettersFromName(name).should.be.eql(8);
        });

        it("Should return 0 when an empty string is provided.", function() {
            sitters.getDistinctLettersFromName('').should.be.eql(0);
        });

        it("Should return 0 when an no value is provided.", function() {
            sitters.getDistinctLettersFromName().should.be.eql(0);
        });
    });
});
