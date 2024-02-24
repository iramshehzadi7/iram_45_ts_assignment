/*Magicians: Make a array of magician’s names. Pass the array to a function
 called show_magicians(), which prints the name of each magician in the 
 array.*/
 function show_Magicians(magicianNames: string[]): void {
    for (const magician of magicianNames) {
        console.log(magician);
    }
}

const magicianNames: string[] = ["baba bangali", "maseeh dajal", "noor sha"];
show_Magicians(magicianNames);





