/*No users:Add an if test to ex30 to make sure the list of users is not empty
.If the list is empty, print the message we need to find some users!
.Remove all of the userNames from your array, and make sure the correct  message
 is printed .*/
 //empty array case
 const emptyUserNames:string[]=[];
 //non empty array case
 let userNames1:string[]=['admin','nadia','zia','hiba']
// functional case
function greetusers1(userNames1:string[]):void{
    if (userNames1.length===0){
        console.log("We need users.");
        return;
    }
}
for(const username of userNames1){
    if (userNames1.toLowerCase()==="admin"){
        console.log('hello admin,would you like to see a status report?');

    }else{
        console.log("hello${userName1},thank you for logging in again.");

    }

}
console.log('for non empty userName1:\n')
greetusers1(userNames1);
//to make empty array case we just assing an empty array to username
userNames1=[];
console.log('\n\nfor empty userName1:\n')
greetusers1(emptyUserNames);
export{}