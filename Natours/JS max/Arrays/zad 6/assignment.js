//1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filtNumbers = numbers.filter((num) => num > 5);
console.log(filtNumbers);

const maping = numbers.map((value) => ({ num: value }));
console.log(maping);

const sum = numbers.reduce((preValue, curValue) => {
  return preValue * curValue;
}, 1);

console.log(sum);

//zad2
function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}
console.log(findMax(...numbers));

//zad 3
function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }

  return [curMax, curMin];
}

const [min, max] = findMinMax(...numbers);
console.log(min, max);
//zad 4

const list = new Set([1, 3, 4, 5, 6, 7, 3]);

console.log(list);
