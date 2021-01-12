module.exports = {
    getListOfSittersByName: records => {
        let result = {};

        records.map(record => {
            if (record.sitter) {
                // Create a unique key that is the sitter's name with no special character and is all lowercase.
                // We use this to collect multiple rows into an aggregate record.
                const key = record.sitter.toLowerCase().replace(/[^0-9a-z_\s]/g, '');

                // Set the original name and email values.
                result[key] = {
                    original_name: record.sitter,
                    email: record.sitter_email
                };
            }
        });
        return result;
    },

    // Collect a unique set of characters from the name value provided and return the count.
    getDistinctLettersFromName: (name = '') => {
        const nameArray = name.toLowerCase().replace(/[^A-z_]/g,'').split('');
        // Using a Set (ES6) so that we can ensure that no value is duplicated.
        const newSet = new Set(nameArray);
        return newSet.size;
    }
}