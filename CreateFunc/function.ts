// simple one
const createHelloWorld3 = () => () => "Hello World";

// arrow and normal function
const createHelloWorld4 = () => {
  return function () {
    return "Hello World";
  };
};