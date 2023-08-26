"use strict";

function calcage(birthyear) {
  const age = 2023 - birthyear;

  function printage() {
    let output = ` ${firstName} are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1991 && birthyear <= 1996) {
      var millenial = true;
      const str = `Oh , and you're a millenial , ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = "New Output!";
    }
    console.log(millenial);
  }
  printage();
  return age;
}

const firstName = "Tom";
calcage(1993);
