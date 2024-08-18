'use strict';

// 1. Destructuring Arrays
// 1.1
const [firstBook, secondBook] = books;

// 1.2
const [, , thirdBook] = books;

// 1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;

// 1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
