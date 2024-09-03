'use strict';
// ----------------- # Challenge-1 # -------------------
// 웹 서비스에서 특정 경기에 대한 데이터를 얻었다고 가정
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
console.log('----------------- # 1 -------------------');
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
console.log('----------------- # 2 -------------------');
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
console.log('----------------- # 3 -------------------');
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
console.log('----------------- # 4 -------------------');
const player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(player1Final);

// 5.
console.log('----------------- # 5 -------------------');
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// console.log(team1, draw, team2);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
console.log('----------------- # 6 -------------------');
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// score: '4:0'
// scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels']
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Sonny', 'KangIn');
printGoals(...game.scored);

// 7.
console.log('----------------- # 7 -------------------');
// odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
// },

// 더 낮은 배당률(odd)을 가진 팀이 승리할 가능성이 더 높다
team1 < team2 && console.log('team1이 승리할 가능성이 더 높습니다!');
team1 > team2 && console.log('team2가 승리할 가능성이 더 높습니다!');
