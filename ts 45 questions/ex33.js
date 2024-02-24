"use strict";
/*Ordinal numbers:ordinal number indicate their position in a array,such as
1st or 2nd.Most ordinal numbers end in th,except 1,2 and 3.
.loop through the array.
.use an if_else chain inside the loop to print the proper ordinal ending for
each number.your output should read"1st,2nd,3rd,4th,....on seprate line*/
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of Numbers) {
    let ordinal;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
        {
        }
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
        console.log(`${number}${ordinal}`);
    }
}
