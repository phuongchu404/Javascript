"use strict";
// const calAge = (birthday) => {
//   const age = 2024 - birthday;
//   function printAge() {
//     // console.log(`my name is ${name}, my age is ${age}`);
//     if (age > 20) {
//       //var address = "VietNam";
//       let str = "Too old";
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     //console.log(address);
//     //console.log(str);
//     //console.log(add(2, 3));
//   }
//   printAge();
//   return age;
// };
// const add2 = function (a, b) {
//   return a + b;
// };
// const add3 = () => console.log(this);
// let x = 34;
// var test = 5;
// // console.log(this.add(2, 3));
// // console.log(add3(4, 6));
// // console.log(this.add2(3, 4));
// console.log(this.t);
// add3(4, 5);

// const obj = {
//   name: "phuong",
//   arrowFunc: () => {
//     console.log(this);
//     console.log(this.name);
//   },
//   regularFunc: function () {
//     console.log(this);
//     console.log(this.name);
//   },
// };
// obj.arrowFunc();
// obj.regularFunc();

// var user = {
//   firstName: "John",
//   sayThis() {
//     function sayHi() {
//       console.log(`this is, ${this}!`); // this is, [Object object]
//       console.log("this is window?", this === window); // false
//       console.log("Firstname is ", this.firstName); // John
//     }
//     // gọi hàm không có đối tượng đi kèm
//     // nhưng chúng ta bind context muốn sử dụng vào
//     sayHi.bind(this)();
//   },
// };

// user.sayThis();
// const calAge = () => {
//   console.log(this);
// };
// calAge();

// const calAge1 = function () {
//   console.log(this);
// };
// calAge1();
// function calAge2() {
//   console.log(this);
// }
// calAge2();
// const test = this;
// console.log(test);
// let a = 1;
// var a1 = 2;
// const a2 = 3;
// console.log(this);
// function add(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// add(2, -3);
// console.log(a3);

const obj = {
  age: 24,
  name: "phuong",
  job: ["developer", "designer"],
};
const objCopy = Object.assign({}, obj);
objCopy.age = 25;
console.log(obj);
console.log(objCopy);
obj;
