/*seeing the world:Think at least five places in the world you'd like to visit.
.store the location in a array.Make sure the array is not in alphabetical order.
.Print your array in its origional order.
.print your array in your alphabetical order without modify the actual list
.show that your array is still in its origional order by printing it.
.Remove the order of your list.Print the array to show that its order has changed.
.Reverse the order of your list again.Print the list to show its back to its origional order.Print the list to show that 
your order has changed.*/

//step 1:Create an array to store Travel destinations
let travelDestinations: string[]=["Madina Munnawra","Makkah","bait ul Muqadas","Italy","Qatter"]

//step 2:print your array in its origional order
console.log(travelDestinations);

//step 3:.print your array in your alphabetical order without modify the actual list
console.log("\n Alphabetical order without modifing the actual list")
console.log([...traverDestinations].sort())

//step 4:show that your array is still in its origional order by printing it again.
console.log("\n showing array in its origional order" );
console.log(travelDestinations);

//step 5:print your array in reverse alphabetical order without changing the order of the origional list.
console.log([...travelDestinations].sort().reverse())

//step 6:show your array is still in oriogional order.
console.log ("\n showing array is still in its origional order");
console.log(travelDestinations);

//step 7:Reverse the order of your list.Print the array to show that its order has changed.
console.log("\n Reverse Order ")
console.log(travelDestinations)

//step 8:Reverse the order of your list again.Print the list to show its back to its origional order.
console.log("\n back to origional")
travelDestinations.reverse()
console.log(travelDestinations)

//step 9: sort your array so it's stored in alphabetical order.
//print the array to show that its order has been changed.
console.log("\nChange to Alphabetical order")
travelDestinations.sort
console.log(travelDestinations)
console.log(travelDestinations)
//step 10:sort to change your array so it's sorted in reverse alphabetical order.Print the list to show  that its 
//order has Changed.
console.log("\n Change to Reverse Alphabetical order")
travelDestinations.sort()
console.log(travelDestinations)
