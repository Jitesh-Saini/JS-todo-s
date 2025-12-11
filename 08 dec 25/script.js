// 1. Print numbers from 1 to 100 using a loop.

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// 2. Print all even numbers between 1 and 50.

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// 3. Print all odd numbers between 1 and 50.

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 != 0) console.log(i);
// }

// 4. Print numbers from 50 to 1 in reverse order.

// for (let i = 50; i >= 1; i--) {
//    console.log(i);
// }

// 5. Find the sum of numbers from 1 to 100.

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// 6. Print multiplication table of a given number.

// let prom = prompt("Enter a number: ");
// for (let i = 1; i <= 10; i++) {
//   console.log(`${prom} * ${i} = ${prom * i}`);
// }

// 7. Count numbers divisible by 3 between 1 and 100.

// let count = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0) count++;
// }
// console.log(count);

// 8. Print squares of numbers from 1 to 20.

// for (let i = 1; i <= 20; i++) {
//   console.log(i*i);
// }

// 9. Print cubes of numbers from 1 to 15.

// for (let i = 1; i <= 15; i++) {
//   console.log(i*i*i);
// }

// 10. Print each character of a string.

// let str = "Hello";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// 11. Print "Welcome JavaScript" 10 times using loop.

// for (let i = 0; i <= 10; i++) {
//   console.log("Welcome JavaScript");
// }

// 12. Find the factorial of a number.

// let n = prompt("Enter a number: ");
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(fact);

// 13. Check if a number is even or odd using loop logic.

// let n = +prompt("Enter a number: ");
// for (let i = 1; i <= n; i++) {
//   if(i%2==0) console.log(`${i} is Even`);
//   else console.log(`${i} is Odd`);

// }

// 14. Calculate the sum of digits of a number.
// let sum = 0;
// let n = +prompt("Enter a number: ");

// while (n > 0) {
//   let last = n % 10;
//   sum += last;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// 15. Reverse a number using a loop.

// let n = 123,
//   rev = 0;
// while (n) {
//   let last = n % 10;
//   rev = rev * 10 + last;
//   n = Math.floor(n / 10);
// }
// console.log(rev);

// 16. Count total digits in a number.

// let n = +prompt("Enter a number: ");
// let count = 0;
// while (n > 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// console.log("Total digits:", count);

// 17. Check whether a number is palindrome.
// let n = +prompt("Enter a number: ");
// let rev = 0,
//   temp = n;
// while (n) {
//   let last = n % 10;
//   rev = rev * 10 + last;
//   n = Math.floor(n / 10);
// }
// if (temp == rev) console.log(`${temp} is a Palindrome`);
// else console.log(`${temp} is not a Palindrome`);

// 18. Check whether a number is prime.

// let n = +prompt("Enter a number: ");
// if (n <= 1) {
//   console.log(`${n} is not a Prime Number`);
// } else {
//   let isPrime = true;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) console.log(`${n} is a Prime Number`);
//   else console.log(`${n} is not a Prime Number`);
// }

// 19. Print all prime numbers from 1 to 100.

// for (let num = 2; num <= 100; num++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(num);
// }

// 20. Count vowels in a string.

// let str = "Hello World";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];
//   if (
//     ch == "a" ||
//     ch == "e" ||
//     ch == "i" ||
//     ch == "o" ||
//     ch == "u" ||
//     ch == "A" ||
//     ch == "E" ||
//     ch == "I" ||
//     ch == "O" ||
//     ch == "U"
//   ) {
//     count++;
//   }
// }
// console.log("Total Vowels:", count);

// 21. Count consonants in a string.
// let str = "Hello World";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];
//   if (
//     ch != "a" &&
//     ch != "e" &&
//     ch != "i" &&
//     ch != "o" &&
//     ch != "u" &&
//     ch != "A" &&
//     ch != "E" &&
//     ch != "I" &&
//     ch != "O" &&
//     ch != "U"
//   ) {
//     count++;
//   }
// }
// console.log("Total Consonants:", count);

// 22. Print Fibonacci series up to n terms.

// let n = +prompt("Enter number of terms: ");
// let a = 0, b = 1;
// console.log("Fibonacci Series:");
// for (let i = 1; i <= n; i++) {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }

// 29. Print multiplication tables from 1 to 10.

// for (let j = 1; j <= 10; j++) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${j} * ${i} = ${j * i}`);
//   }
//   console.log("\n");

// }

// 30. Print reverse counting with a gap of 2.

// for (let i = 100; i >= 0; i=i-2) {
//   console.log(i);
// }

// 31. Count total words in a sentence.

// let str = prompt("Enter a sentence: ");
// let count = 1;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == " ") {
//     count++;
//   }
// }
// console.log(count);

// 32. Reverse a string using a loop.

// let str = prompt("Enter a string: ");
// let rev = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   rev += str[i];
// }
// console.log("Reversed string:", rev);

let str = prompt("Enter a string: ");
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
if (str === rev) console.log("Palindrome");
else console.log("Not Palindrome");
