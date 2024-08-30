// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
//Add 9 as the first element

// myArr.shift()
//removes the first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);
//converts arrayelements to string 

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);
//removes or adds elements from index 1 to 3 (exclusive) . Does not alter arrays

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
//removes or adds elements from index 1 to 3 (exclusive) . Does alter arrays accordingly
