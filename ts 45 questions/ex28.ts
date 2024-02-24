/*stages of life:write an if_else chain that determines a person's stage of life .set a value 
for a variable age,and then;*/
let age:number=25;
if(age<2){
    console.log("The person is a baby");
}else if (age<4){
    console.log("age is${age},the person is toddler.");
}else if(age<12){
    console.log("the person is a kid")
}else if (age<20){
    console.log("the person is teenager");
}else if (age<65){
    console.log("the person is an adult");
}else if(age>60){
    console.log("the person is elder");
}
//to test with different ages
console.log("2nd test with different age");
age=12
if(age<2){
    console.log("the person is baby");
}else if (age<4){
    console.log("the person is a toddler");
}else if(age<20){
    console.log("the person is teenager");
}else if (age<65){
    console.log("the person is an adult");
}else {
    console.log("the person is an elder");
}