// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

const expect = (val) => {
  return {
    toBe: (args) => {
      if (val === args) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe: (args) => {
      if (val !== args) {
        return true;
      } else throw new Error("Equal");
    },
  };
};

const test1 = expect(5).toBe(5);
console.log(test1); // true

const test2 = expect(5).notToBe(5);
console.log(test2); // Equal
