// Store the person's name in a variable
const personName: string = "muhammad ibrahim ";

// Convert to lowercase
const lowercaseName: string = personName.toLowerCase();
console.log(`Lowercase: ${lowercaseName}`);

// Convert to uppercase
const uppercaseName: string = personName.toUpperCase();
console.log(`Uppercase: ${uppercaseName}`);

// Convert to titlecase (capitalize first letter of each word)
function toTitleCase(input: string): string {
    return input.replace(/\w\S*/g, (word) => 
    word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
}

const titlecaseName: string = toTitleCase(personName);
console.log(`Titlecase: ${titlecaseName}`);

