/*Great Magicians:start with a copy of your program from ex.41.Write a function called make great()that modifies the array of magicians by adding
the phrase the great to each magician's name.call show_magicians()to see that the list has actually been modified.*/
//array of magicians name
const magician_Names:string[]=["Harry porter","David copperfield","Harmione Granger","Professor Albus Dumbledore","Ron weasley"];
function showMagicians(magicians:string[]):void{
    for (const magician of magicians){
        console.log(magician);
    }
}
function make_great1(magicians:string[]):string[]{
const greatMagicians:string[]=magicians.map(magicians=>`the great${magicians}`);
return greatMagicians;
}
//Modify the array to add "the great"to each magicians name
const greatMagicianNames:string[]make_great2(magicians);
h((magician) => console.log(`- ${magician}`));


