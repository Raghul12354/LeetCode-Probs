// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

const createCounter = (init) => {
  let counts = init;
  return {
    increment: () => ++counts,
    decrement: () => --counts,
    reset: () => (counts = init),
  };
};

const counter = createCounter(10);

const test1 = counter.increment();
console.log(test1); //11

const test2 = counter.reset();
console.log(test2); //10

const test3 = counter.decrement();
console.log(test3); //9
