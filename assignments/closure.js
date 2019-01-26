// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const multiply = (num) => {

  return function (num2) {
    return num * num2;
  }
}

const times5 = multiply(5);
const times10 = multiply(10);
console.log(times5(4))
console.log(times10(4))

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return function () {counter += 1; return counter}
  };

const newCounter = counter();

newCounter()


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {

  let counter = 0;
  return {
    "increment": function(){
      counter ++
      return counter
    },
    "decrement": function(){
      counter --
      return counter
    }
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const counterFunc = counterFactory();
counterFunc.increment();