type ObjFunc = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter2(init: number): ObjFunc {
    let counts = init
    return {
        increment: () => ++counts,
        decrement: () => --counts,
        reset: () => counts = init,
    }
};