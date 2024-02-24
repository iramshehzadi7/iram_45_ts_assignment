/*Animals: Think of at least three different animals that have a common characteristic.
 Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
  • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make
 a great pet!*/
 function describe_animals(animalNames: string[]): void {
    console.log("Animals with a Common Characteristic:");
    for (const animal of animalNames) {
        console.log(`- ${animal}`);
    }

    console.log("\nStatements about each animal:");
    for (const animal of animalNames) {
        switch (animal.toLowerCase()) {
            case "dog":
                console.log(`A ${animal} would make a great pet.`);
                break;
            case "cat":
                console.log(`A ${animal} is an independent companion.`);
                break;
            case "rabbit":
                console.log(`A ${animal} is gentle and social.`);
                break;
            default:
                console.log(`An unknown animal: ${animal}`);
        }
    }

    console.log("\nWhat these animals have in common:");
    console.log("Any of these animals would make a great pet!");
}

