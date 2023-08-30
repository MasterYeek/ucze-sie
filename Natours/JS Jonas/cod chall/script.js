"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [players1] = [game.players];
// console.log(players1);

const printgoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were  scored`);
};

printgoals("Davies", "Muller", "Lewandowski", "Kimmich");
printgoals("Davies", "Muller");
printgoals(...game.scored);

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

const allplayers = [...players1, ...players2];
console.log(allplayers);

const playersfinal = [...players1, "Tiago", "Coutiho", "Perisic"];
console.log(playersfinal);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

team1 < team2 && console.log(`Team1 is more likely to win`);
team1 > team2 && console.log(`Team2 is more likely to win`);
