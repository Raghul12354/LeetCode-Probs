/*
Question:
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
*/
// first approach
const createHelloWorld = () => {
  return function (...args) {
    return "Hello World";
  };
};

const f = createHelloWorld();
f();

console.log(f());

// Just understand the structure, a function that returns a function that should return what I want

// simple one
const createHelloWorld2 = () => () => "Hello World";