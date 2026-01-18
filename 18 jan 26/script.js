// -----------------------------EASY LEVEL---------------------------------

// 1. Remove duplicate values from an array using array methods.----------

// let arr = [10,20,30,10,40,30,50,60,70]
// let uniqarr = [...new Set(arr)]
// console.log(uniqarr);

// 2. Find the maximum number in an array without using Math.max().-------------

// let arr = [1, 2, 3, 4, 5];
// let ans = Math.max(...arr);//Math.max direct kbhi array accept nhi krta spread operator ka use krke kr skte h
// console.log(ans);

// brute force
// let arr = [1, 2, 3, 4, 5];
// let max = 0;
// arr.forEach((a)=>{
//     if(a>max) max = a;
// })
// console.log(max);

// 4. Count how many times each element appears in an array.----------------

// let arr = [1, 2, 3, 4, 5];
// let count = 0;
// arr.forEach(function(){
//     count++;
// })
// console.log(count);

// 5. Check if at least one number in an array is negative.---------------------

// let arr = [1, 2, 3, -4, 5];
// let hasNegative = arr.some(num => num < 0);
// console.log(hasNegative); // true

// 6. Check if all elements in an array are numbers.---------------------------

// let arr = [1, 2, 3, 4, 5];
// let allNumbers = arr.every(val => typeof val === "number");
// console.log(allNumbers); // true

// 7. Find the first element greater than 50.----------------------------------

// let arr = [10, 20, 30, 40, 50, 65, 70, 80, 90];
// let arr1 = arr.find((val) => val > 50);
// console.log(arr1);

// //another way
// let arr = [10, 20, 30, 40, 50, 65, 70, 80, 90];
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >50) {
//     max = arr[i];
//     break;
//   }
// }
// console.log(max);

// 9. Reverse an array without mutating the original array.--------------

// let arr = [1, 2, 3, 4, 5];
// let reversedarr = [...arr].reverse();
// console.log(reversedarr);
// console.log(arr);

//another way--------------
// let arr = [1, 2, 3, 4, 5];
// let rev = [];
// arr.forEach((a)=>{
//     rev.push(a);
// })
// console.log(rev);
// let newrev = rev.reverse();
// console.log(newrev);

//another way-----------
// let arr = [1,2,3,4,5]
// let rev=[]
// for(let i=0;i<arr.length;i++){
//     rev.push(arr[i])
// }
// console.log(rev);

// 10. Find the index of the last occurrence of a value.-----------------

// let arr = [10, 20, 30, 20, 40];
// let index = arr.lastIndexOf(20);
// console.log(index); // 3

//-----------------------------MEDIUM LEVEL-------------------------------

// 1. From an array of numbers, return only even numbers.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newarr = [];
// arr.forEach((a) => {
//   if (a % 2 === 0) {
//     newarr.push(a);
//   }
// });
// console.log(newarr);



// 5. Sort an array of numbers in ascending order.------------------

// let arr = [10,70,20,30,80,50,100,60]
// arr.sort((a,b)=>a-b)
// console.log(arr);
