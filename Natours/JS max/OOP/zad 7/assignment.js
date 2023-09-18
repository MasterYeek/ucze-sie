//zad1

class Course {
  #price;
  get price() {
    return "$" + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw " Invalid value";
    }
    this.#price = value;
  }
  constructor(Coursetitle, Courselength, Courseprice) {
    this.title = Coursetitle;
    this.length = Courselength;
    this._price = Courseprice;
  }

  calculateValue() {
    return this.length / this.#price;
  }

  printSummary() {
    console.log(
      `title ${this.title}, lenght: ${this.length}, price: ${this.price}`
    );
  }
}

const course1 = new Course("JavaScript - Complete Guide", 10, 19);
const course2 = new Course("JavaScript - Complete Guide", 50, 30);

console.log(course1);
console.log(course2);

console.log(course1.calculateValue);
console.log(course2.calculateValue);

course1.printSummary();
course2.printSummary();

//zad3

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.Exercises = numOfExercises;
  }
}
const angularCourse = new PracticalCourse("Angular", 64, 21.21, 600);
console.log(angularCourse);
angularCourse.printSummary();

class TheoreticalCourse extends Course {
  publish() {
    console.log("No siema");
  }
}

const FLutterCourse = new TheoreticalCourse("React", 23, 21, 535);

FLutterCourse.printSummary();
FLutterCourse.publish();

//zad4
