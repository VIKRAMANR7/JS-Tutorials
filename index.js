//Optional chaining
const user1 = {
  firstName: "John",
  lastName: "Doe",
  address: undefined,
};

// console.log(user1.address.house.number); // Error because address not exists

//Old solution
user1 &&
  user1.address &&
  user1.address.house &&
  console.log(user1.address.house.number); //5

const user2 = {
  firstName: "John",
  lastName: "Doe",
  address: {
    city: "NYC",
    street: "Test Road",
    house: {
      number: 5,
    },
  },
};

console.log(user2.address.house.number); //5

//Optional chaining - It gets null or undefined it returns undefined
console.log(user2?.address?.house?.number);

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number));
// 1 2 3 4 5
console.log(numbers.includes(2)); //true

const filteredNumbers = numbers.filter((number) => number < 3);
console.log(filteredNumbers); //[1,2] does not mutate
console.log(numbers); //[ 1, 2, 3, 4, 5 ]

const newNumbers = numbers.map((number) => number + 1);
console.log(newNumbers); //[ 2, 3, 4, 5, 6 ] does not mutate
console.log(numbers); //[ 1, 2, 3, 4, 5 ]

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum); //15
/* If you do not specify the acc value, it will be the first element of the array at the first iteration, and value will be the second one. */

console.log(numbers.some((number) => number < 3)); //true - atleast one

console.log(numbers.every((number) => number < 3)); // false - all should

const numbers2 = [4, 76, 5, 2, -9, 0, 16];
const sortedArray = numbers2.sort(function (a, b) {
  return a - b;
});
console.log(sortedArray);
/*
[
  -9,  0,  2, 4,
   5, 16, 76
] */

const sortRevArray = sortedArray.reverse();
//reverse() method mutates the original array
console.log(sortRevArray);
/*
[
  76, 16,  5, 4,
   2,  0, -9
] */
console.log(numbers2);

const concatArr = numbers.concat(numbers2);
console.log(concatArr);
/* [
   1,  2, 3, 4, 5,
  76, 16, 5, 4, 2,
   0, -9
] */

//const and let
let age = 20;
age = age + 1;
console.log(age); //21

//default paramters
// const add = (a, b) => console.log(a + b);
// add(1); // Error

const add = (a, b = 2) => console.log(a + b);
add(1); // 3

//array destructuring
const arr = [1, 2, 3];
const [first, second, third] = arr;
//Or we can destructure
//const [first,,third] = arr;
console.log(first, second, third); // 1 2 3
console.log(first, third); // 1 3

//object destructuring
const obj = {
  channel: "MrBeast",
  views: "100000000000",
};
//You can normally access by object.keys
//console.log(obj.channel);
const { channel, views } = obj;
console.log(channel); //MrBeast
console.log(views);

//rest operator
const addition = (a, b, c) => console.log([a, b, c].reduce((a, b) => a + b, 0));
addition(1, 2, 3); //6

const addition1 = (...numbers) =>
  console.log(numbers.reduce((a, b) => a + b, 0));
addition1(2, 43, 5, 6, 2, 6, 5, 7); // 76

//spread operator
const arr3 = [1, 2, 3, 4];
console.log(arr3[0], arr3[1], arr3[2]); // 1 2 3
console.log(...arr3); //1 2 3 4
