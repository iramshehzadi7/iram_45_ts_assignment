/*shrinking guests:you just found out that your new dinner table won't arrive in time for the
dinner,and you have space only for twoguests.
.start your program with ex 16.Add a new linethat prints a message saying that you have
 invite only two people for dinner.
 .Remove guests from your list one at a time untill only two names remain in your list.Each time
 you pop a name from your list ,print a message to that person letting them know you're
 sorry you can't invite them to dinner.*/
 let guesrList2:Array<string> =[
   " Ali phool",
    "Zia Khan",
    "Mian Asif",
    "Jahanzaib Tayab",
    "Abid Shirwani",
    "Muhammad Ali"

 ]//message about inviting only two persons
 console.log("I can invite only two persons for dinner");
 //remove guest from the list
 while (guestlist.length>2){
    let remove guests = guestlist.pop()
    console.log("Sorry,${removeGuest},I can't invite you to dinner.");
    //part 3.print a message to each of the two people still on your list,letting them know they're still invited
    for(let guest of guests) {
        console.log("Hello,${guest},you are still invited to dinner!");
    }
 }
 //part4:Remove the last two names from your list,so you have an empty list.Print your list to make sure you actually
// have an empity list  at the end of your program.
guestlist.pop()
guestlist.pop()
//print empty string
console.log(`guest list after dinner:${guestList2}`)

