const self = module.exports = {
    getSearchScore: (ratingsArray = [], {profile = 0, ratings = 0}) => {
        // If zero reviews, return the profile score.
        if (!ratingsArray.length) {
            return profile;
        }
        // If 10+ reiviews, return the ratings review.
        else if (ratingsArray.length >= 10) {
            return ratings;
        }
        // If 1-9 reivews, return the weighted average of the reviews.
        else {
            const weight = ratingsArray.length / 10;
            const weightedAverage = self.calculateWeightedAverage(weight, profile);
            // Cast the average as a number and return the value to two decimal places.
            return +parseFloat(weightedAverage).toFixed(2);
        }
    },
    // The weighted average is the number of reviews, devided by 10, plus the profile score.
    calculateWeightedAverage: (weight, profileScore) => (profileScore * weight) + profileScore
}