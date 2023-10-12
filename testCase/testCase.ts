type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

const expect2 = (val: any): ToBeOrNotToBe => {
  return {
    toBe: (para: any) => {
      if (val === para) {
        return true;
      } else throw new Error("Not Equal");
    },
    notToBe: (para: any) => {
      if (val !== para) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

const test3 = expect2(10).toBe(10);
console.log(test3);

const test4 = expect2(10).notToBe(10);
console.log(test4);
