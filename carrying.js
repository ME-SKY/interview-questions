/* 
  это функциональная техника, которая преобразует функцию с несколькими аргументами 
  в последовательность функций, каждая из которых принимает только один аргумент.
*/

//without carrying
function add(a, b, c) {
    return a + b + c;
}

console.log(add(1, 2, 3)); // 6

//with carrying
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

//более короткая запись с использованием стрелочных функций
// const curriedAdd = a => b => c => a + b + c;

console.log(curriedAdd(1)(2)(3)); // 6

// Или поэтапно:
const add1 = curriedAdd(1);      // function(b) { return function(c) {...} }
const add1And2 = add1(2);        // function(c) { return 1 + 2 + c; }
const result = add1And2(3);      // 6

// можно выполнять композицию функций:

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const addC = a => b => a + b;
const multiply = a => b => a * b;
const subtract = a => b => a - b;

const complexOperation = compose(
    subtract(10),
    multiply(3),
    addC(5)
);

console.log(complexOperation(4)); // ((4 + 5) * 3) - 10 = 17

