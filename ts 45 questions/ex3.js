"use strict";
//name cases:store a person's name in a variable,and then print that person's
//name in a lower case,upper case and title case
let PersonName = "Muhammad Ibraheem";
//step one show in lower case:
let lowercaseName = PersonName.toLowerCase();
console.log(lowercaseName);
//step 2 show name in upper case
let uppercaseName = PersonName.toUpperCase();
console.log(uppercaseName);
//step 3 show name in titlecase
let words = PersonName.split("");
let titlecaseName = "--";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].toLowerCase +
    ;
}
;
console.log(titlecaseName);
