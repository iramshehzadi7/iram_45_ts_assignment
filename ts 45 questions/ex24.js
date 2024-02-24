"use strict";
/*more conditional tests:you don't have to limit the number of tests you create
to 10.if you want to try more comperisons,write more tests.have at least one true
and one false result for each of the followings:
.Tests for equality and inequality with string.
.Tests using the lower case function
.Numerical tests involving equality and inequality,< and >,> or =,and < and=
.Test using "and"and"or" operators
.Test whether an item is in a array
.Test whether an item is not in a array*/
//Test for equality and inequality with strings
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2); //false
console.log(str1 !== str2); //true
//Test using lower case function
const test1 = "Hello World";
const test2 = "hello world";
console.log(test1.toLowerCase() === test2); //true
//numerical test involving equality and inequality,
const num1 = 10;
const num2 = 5;
console.log(num1 === num2); //false
console.log(num1 !== num2); //false
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false
