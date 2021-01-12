const fs = require('fs');
const csv = require('csv');
const { finished } = require('stream/promises');

const parser = csv.parse({
    columns: true
});

module.exports = {
    parseCsv: async (source) => {
        let records = [];
        let readStream = fs.createReadStream(source);
        readStream.on('error', error => {
            console.info(error.message);
        });

        parser.on('data', data => {
            records.push(data);
        });
        parser.on('error', error => {
            console.info(error);
        });

        readStream.pipe(parser);
        
        await finished(parser);
        return records;
    }
}