/*Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of
  magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.*/
 function make_album(artist: string, album: string): Record<string, string> {
    return { artist, album };
}

function make_great(magicianNames: string[]): string[] {
    // Create a new array with "the Great" added to each magician's name
    const greatMagicians = magicianNames.map(name => `the Great ${name}`);
    return greatMagicians;
}

function show_magicians(magicianNames: string[]): void {
    for (const magician of magicianNames) {
        console.log(magician);
    }
}


 