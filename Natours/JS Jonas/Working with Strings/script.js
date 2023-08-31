`use strict`;

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737");

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle saeat");
  else console.log("You got lucky");
};
//B and E are middle seats

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in name
const passenger = "TOm"; // Tom

const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails

const email = "hello@tom.io";
const loginEmail = "  Hello@Tom.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// SAME
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Replacing

const priceUK = "288,97euro";
const priceUS = priceUK.replace("euro", "$").replace(",", ".");
console.log(priceUS);

const annoucement = "All passenger come o boarding door 23. Boarding door 23!";
console.log(annoucement.replace("door", "gate"));
console.log(annoucement.replaceAll("door", "gate"));

//Booleans

const planeair = "Airbus A320neo";
console.log(planeair.includes("A320"));
console.log(planeair.startsWith("Air"));

if (planeair.startsWith("Airbus") && plane.endsWith("neo")) {
}
console.log("Part of the new airbus family");

//Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and gun for protection");

//Split and join
console.log("a+very+nice+string".split("+"));
console.log("Tom Świerczek".split(" "));

const [firstName, lastName] = "Tom Świerczek".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// first letter big
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //SAME
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica and smith davis");
capitalizeName("tom swierczek");

//Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("Tom".padStart(25, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(433356546354634));
console.log(maskCreditCard(4333565463));
console.log(maskCreditCard("433356546354634"));

//Repeat

const message2 = "Bad weather... ALl departues Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${"🪐".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(flights.split("+"));

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${from.slice(0, 3).toUpperCase()} ${to} (${time.replace(":", "h")})
 `.padStart(49);
  console.log(output);
}
