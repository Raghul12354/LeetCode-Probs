const createCounter2 = (n: number) => () => n++;

const counter2 = createCounter2(50);

console.log(counter2());
console.log(counter2());
console.log(counter2());