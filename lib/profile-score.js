const sitters = require('./sitters');

module.exports = {
    // Calculate the profile score.
    getProfileScore: sitter => {
        // First, create a count of the unique characters in the sitter's name.
        const charsCount = sitters.getDistinctLettersFromName(sitter);
        // Then multiply by the fraction of chars in the english alphabet.
        const numerator = charsCount * 5;
        const value = Math.floor((numerator / 26) * 100) / 100;

        // Fix the return value to two decimal places.
        return parseFloat(value.toFixed(2));
    }
}