const task3Element = document.getElementById("task-3");

function pop() {
  alert("Hello there");
}
pop();

function pop2(name) {
  alert("Hello " + name);
}

pop2("Tomasz");

task3Element.addEventListener("click", pop);

function names(name1, name2, name3) {
  const combine = `${name1} ${name2} ${name3}`;
  return combine;
}

const combined = names("one", "two", "three");
alert(combined);

const holds = 5;
let result;
result = 18 + holds;

nextresult = result + (19 * 2) / 3;

alert(result);
alert(nextresult);
