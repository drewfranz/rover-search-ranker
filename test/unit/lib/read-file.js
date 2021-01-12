const chai = require('chai');
const should = chai.should();

const readFile = require('../../../lib/read-file');

describe("Read File", function() {
    context("Parse CSV File", function() {
        it("Should return an array of JSON objects when a valid CSV file is provided", async function() {
            const source = './test/test-single-record.csv';
            const expectedResultArray = [{"rating":"5","sitter_image":"https://images.dog.ceo/breeds/dalmatian/cooper2.jpg","end_date":"2013-04-08","text":"Donec lacus justo luctus tellus nisl penatibus mus massa ipsum odio. Lorem dolor. Fames lorem ligula fusce condimentum dis mauris. Metus nulla quam mus duis congue volutpat et ipsum ad. Purus netus a viverra et sapien et pharetra quis nullam posuere amet sem convallis etiam sagittis vel. Nulla donec suspendisse sagittis hymenaeos mi. Metus risus enim egestas. Fames vitae mus vivamus eu ad donec cum elit consectetuer. Purus magna per rutrum fusce condimentum habitant quis pretium ac egestas diam sapien leo tortor rutrum. Felis vitae fames velit. Ipsum morbi interdum. Neque justo gravida cras at.","owner_image":"https://images.dog.ceo/breeds/hound-ibizan/n02091244_327.jpg","dogs":"Pinot Grigio","sitter":"Lauren B.","owner":"Shelli K.","start_date":"2013-02-26","sitter_phone_number":"+12546478758","sitter_email":"user4739@gmail.com","owner_phone_number":"+15817557107","owner_email":"user2555@verizon.net","response_time_minutes":"2"}];
            const records = await readFile.parseCsv(source);
            records.should.be.eql(expectedResultArray);
        });

        it("Should return an empty array when an invalid source file is provided.", async function() {
            const source = 'invalid.csv';
            const records = await readFile.parseCsv(source);
            records.should.eql([]);
        });
    });
});