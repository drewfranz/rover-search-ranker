#!/usr/bin/env node

const csvReader = require('commander');
const readFile = require('./lib/read-file');
const writeFile = require('./lib/write-file');

const sitters = require('./lib/sitters');
const profileScore = require('./lib/profile-score');
const ratings = require('./lib/ratings');
const ratingsScore = require('./lib/ratings-score');
const searchScore = require('./lib/search-score');

// Here's our entry point.
// We are using the command library to help with some Node.js CLI boilerplate.
csvReader
    .command('parse <source> [destination]')
    .description('Parse a CSV file and process the data')
    .action(async (source, destination = "sitters.csv") => {
        // Parse the input .csv file and create an object for each row.
        const records = await readFile.parseCsv(source, destination);

        // Create a semi formatted and aggregated list of sitters by name.
        const data = sitters.getListOfSittersByName(records);

        for(const name in data) {
            // Create an array of ratings for each unique sitter by name.
            data[name]['ratings'] = ratings.getRatingsByName(data[name].original_name, records);
            
            // Calculate the profile and ratings scores.
            data[name]['scores'] = {
                profile: profileScore.getProfileScore(name),
                ratings: ratingsScore.getRatingsScore(data[name]['ratings'])
            }
        }

        // To calculate the search score we need the profile and ratings to be complete.
        for(const name in data) {
            data[name]['scores']['search'] = searchScore.getSearchScore(data[name]['ratings'],data[name]['scores']);
        }
        
        // We have the data, so start the output process.
        writeFile.createOutputCsv(data, destination);
    });

// Grab the CLI arguments passed.
csvReader.parse(process.argv);

// No args were passed, so log the help screen.
if (!csvReader.args.length) {
    csvReader.help();
}