// 1. implementing a queue with arrays
// let queue = [];
// queue.push('A');
// queue.push('B');
// queue.push('C');
// document.write(queue)
// output:['A', 'B', 'C']

//2. implementing a stack with arrays
// let stack = [];
// stack.push('A');
// stack.push('B');
// stack.push('C')
// document.write(stack);
// output:['A', 'B', 'C']

//3. comparing two arrays of equality
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
const isEqual = JSON.stringify(arr1) === JSON.stringify(arr2);
document.write(isEqual);
// output: true

// 4. sorting arrays with complex objects
// let arr = [
//     {name: 'John', age: 25},
//     {name: 'Alice', age: 30},
//     {name: 'Bob', age: 20}
// ];
// arr.sort((a, b) => a.age - b.age);
// console.log(arr);
// output:
// [
//     { name: 'Bob', age: 20 },
//     { name: 'John', age: 25 },
//     { name: 'Alice', age: 30 }
// ]    

// 5.rotating an array
// let arr = [1, 2, 3, 4, 5];
// arr.unshift(arr.pop());
// console.log(arr);
// output: [5, 1, 2, 3, 4]