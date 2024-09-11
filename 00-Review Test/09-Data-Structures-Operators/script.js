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

// -----------------------------------------

// 3. The Spread Operator (...)
// 3.1
const bookAuthors = [...books[0].author, ...books[1].author];

// 3.2
function spellWord(word) {
  console.log(...word);
}
spellWord('JavaScript');

// -----------------------------------------

// 4. Rest Pattern and Parameters
// 4.1 (Array)
const [mainKeyword, ...rest] = books[0].keywords;

// 4.2 (Object)
const { publisher: bookPublisher, ...restOfTheBook } = books[1];

// 4.3
function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// -----------------------------------------

// 5. Short Circuiting (&& and ||)
// 5.1
// book 객체, 속성 programmingLanguage
const books1 = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    programmingLanguage: 'Java',
  },

  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    programmingLanguage: 'JavaScript',
  },
];

// 책 객체에 'programmingLanguage' 속성이 있고, 그 값이 'Java'인지 확인
// function hasExamplesInJava(book) {
//   if (book.programmingLanguage === 'Java') {
//     return true;
//   } else {
//     return 'no data available';
//   }
// }

function hasExamplesInJava(book) {
  return book.programmingLanguage === 'Java' || 'no data available';
}

console.log(hasExamplesInJava(books1[0]));
console.log(hasExamplesInJava(books1[1]));

// 5.2
const books2 = [
  {
    title: 'Island of Blue Dolphins',
    onlineContent: false,
  },

  {
    title: 'Operating System Concepts',
    onlineContent: true,
  },
];

// for (let i = 0; i < books2.length; i++) {
//   if (books2[i].onlineContent) {
//     console.log(`"${books2[i].title}" provides online content.`);
//   }
// }

for (let i = 0; i < books2.length; i++) {
  books2[i].onlineContent &&
    console.log(`"${books2[i].title}" provides online content.`);
}

// -----------------------------------------

// 6. The Nullish Coalescing Operator (??)
// 6.1
// books array에 onlineContent 존재 X
const books = [
  {
    title: 'Island of Blue Dolphins',
    onlineContent: true,
  },

  {
    title: 'Operating System Concepts',
  },
];

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(
      `"${books[i].title}" provides no data about its online content.`
    );
}

// -----------------------------------------

// 7. Logical Assignment Operators
const books = [
  {
    title: 'Island of Blue Dolphins',
    onlineContent: false,
    highlighted: true,
    thirdParty_goodreads_rating: 4.5,
  },

  {
    title: 'Operating System Concepts',
    onlineContent: true,
    highlighted: true,
    thirdParty_goodreads_rating: 4.0,
  },
];

// 7.1
for (let i = 0; i < books.length; i++) {
  // books[i].edition ??= 1; -> null 또는 undefined 일 때만
  books[i].edition ||= 1;
}

// 7.2
// books[i].highlighted = books[i].highlighted && !(books[i].thirdParty.goodreads.rating < 4.2)
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty_goodreads_rating < 4.2);
  console.log(books[i].highlighted);
}

// -----------------------------------------

// 8. Looping Arrays: The for-of Loop
// 8.1
let pageSum = 0;

for (let book of books) {
  pageSum += book.pages;
}

// 8.2
const books = [
  { title: 'Book 1', author: 'Author A' },
  { title: 'Book 2', author: ['Author B', 'Author C'] },
];

const addAuthors = [];

for (const book of books) {
  // string(문자열) -> single author
  if (typeof book.author === 'string') {
    addAuthors.push(book.author);
    // array(배열) -> multiple authors
  } else {
    for (const author of book.author) {
      addAuthors.push(author);
    }
  }
}

console.log(addAuthors);

// 8.3
const allAuthors = [
  'Robert Sedgewick',
  'Kevin Wayne',
  'Harold Abelson',
  'Cal Newport',
];

for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}. ${author}`);
}
*/
// -----------------------------------------

// 9. Enhanced Object Literals
// 9.1
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  // ...(Here)
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

// 9.2
const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  // ...(Here)
  pages,
};
