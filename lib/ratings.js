module.exports = {
    // Create an array of all ratings for a given name.
    getRatingsByName: (name, records) => {
        let ratings = [];
        records.map(record => {
            if (record.sitter === name) {
                ratings.push(parseInt(record.rating));
            }
        });
        return ratings;
    }
}