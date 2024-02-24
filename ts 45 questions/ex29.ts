/*favourite fruit:m ake a array of your favorite fruite,and then write a series of independent if
statements that check certain fruits in your array.
.make a array of your three favorite fruits and call it favourite fruits
.write five if statements.Each should check whether a certain kind of fruite is in your array,
the if block should print a statement such as you really like bananas!
//define the array of fruits*/
const favoriteFruits:string[]=["apple","banana","orange"];
//check for spesific fruits using independent if statement
if(favoriteFruits.includes("apples")){
    console.log("I like apples");
}
if(favoriteFruits.includes("banana")){
    console.log("I enjoy banana!");
}    
if(favoriteFruits.includes("orange")){
 console.log("oranges are delicious");
 }
 if(favoriteFruits.includes("grapes")){
    console.log("grapes are tasty")
 }
 if(favoriteFruits.includes("mangoes")){
    console.log("mongoes are one of my favourites");
 }    