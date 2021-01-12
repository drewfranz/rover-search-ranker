const csvWriter = require('csv-writer').createObjectCsvWriter;

const self = module.exports = {
    createOutputCsv: (data, destination) => {
        // Create the csv writing object and set the header and field values.
        const output = csvWriter({
            path: destination,
            header: [
                {id: 'email', title: 'email'},
                {id: 'original_name', title: 'name'},
                {id: 'profile', title: 'profile_score'},
                {id: 'ratings', title: 'ratings_score'},
                {id: 'search', title: 'search_score'}
            ]
        });

        // Flatten the data object to play nice with the writer.
        const formattedData = self.formatData(data);

        // Write the csv file and log a completion.
        output.writeRecords(self.sortFormattedData(formattedData))
            .then(() => console.info('The CSV file was written successfully'))
            .catch(error => console.info("Save failed", error));
    },
    formatData: data => {
        return Object.entries(data).map(sitter => {
            let formattedData = sitter[1];
            formattedData['profile'] = sitter[1]['scores'].profile;
            formattedData['ratings'] = sitter[1]['scores'].ratings;
            formattedData['search'] = sitter[1]['scores'].search;

            return formattedData;
        });
    },
    sortFormattedData: data => {
        const compare = (a, b) => {
            if (a.search > b.search) {
                return -1;
            }
            if (a.search < b.search) {
                return 1;
            }
            if (a.original_name.toUpperCase() < b.original_name.toUpperCase()) {
                return -1;
            }
            if (a.original_name.toUpperCase() > b.original_name.toUpperCase()) {
                return 1;
            }
            return 0;
        }
        return data.sort(compare)
    }
}