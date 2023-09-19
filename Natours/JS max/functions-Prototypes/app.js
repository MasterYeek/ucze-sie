class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = "Max";

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(
      "hi, i am " + this.name + " and i am " + this.age + " yeards old "
    );
  }
}
const p = new Person();
console.log(p);
// function Person() {
//   this.age = 30;
//   this.name = "Max";
//   this.greet = function () {
//     console.log(
//       "hi, i am " + this.name + " and i am " + this.age + " yeards old "
//     );
//   };
// }

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__);

const course = {
  title: "java",
  rating: 5,
};
//console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});
const student = Object.create({
  printprogress: function () {
    console.log(this.progress);
  },
});

student.name = "Tom";
Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});
student.printprogress();
course.printRating();
