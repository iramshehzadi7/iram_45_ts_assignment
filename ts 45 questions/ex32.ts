/*Checking Usernames: Do the following to create a program that simulates
 how websites ensure that 
everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users.
 Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already 
been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 
'JOHN' should not be accepted.*/
function checkUsernames(currentUsers: string[], newUsers: string[]): void {
    console.log("Checking usernames availability:");

    for (const newUser of newUsers) {
        const lowerNewUser = newUser.toLowerCase(); // Convert to lowercase for case-insensitive comparison
        if (currentUsers.includes(lowerNewUser)) {
            console.log(`Username "${newUser}" is already taken. Please choose a different one.`);
        } else {
            console.log(`Username "${newUser}" is available.`);
        }
    }
}


