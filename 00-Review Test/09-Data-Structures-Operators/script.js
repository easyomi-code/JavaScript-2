'use strict';

/*
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

// -----------------------------------------

// 2. Destructuring Objects
// 2.1
const { title, author, ISBN } = books[0];

// 2.2
const { keywords: tags } = books[0];

// 2.3
const { language, programmingLanguage = 'unknown' } = books[6];

// 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);

// 2.5
// {
//   title: 'Algorithms',
//   ...
//   thirdParty: {
//     goodreads: {
//       rating: 4.41,              // <-- HERE
//       ratingsCount: 1733,
//       reviewsCount: 63,
//       fiveStarRatingCount: 976,
//       oneStarRatingCount: 13
//     }
//   }
// },

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

// 2.6
// 출력1) "Algorithms by Robert Sedgewick, 2011"
// 출력2) "Algorithms by Robert Sedgewick, year unknown"
function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}

printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });
*/
// -----------------------------------------

// 3. The Spread Operator (...)
// 3.1
const bookAuthors = [...books[0].author, ...books[1].author];

// 3.2
function spellWord(word) {
  console.log(...word);
}
spellWord('JavaScript');
