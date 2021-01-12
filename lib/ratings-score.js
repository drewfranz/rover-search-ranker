const sitters = require('./sitters');

module.exports = {
    // Create the ratings score.
    getRatingsScore: ratings => {
        let score = 0;
        if (ratings && ratings.length) {
            // Get the average of the scores. Sum of the scores divided by the number of scores.
            const sum = ratings.reduce((accumulator, currentValue) => accumulator + currentValue);
            score = parseFloat((sum / ratings.length).toFixed(2));
        }
        return score;
    }
}