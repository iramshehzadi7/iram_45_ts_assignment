//more guest:you have just found a bigger dinner table,so now more space is
//available .think of three more guest to invite to dinner
//. start your program with q.15.add a print statement to the end of your 
//program informing people that you found a bigger table.
//Add one new guest to the......
//step 1 informing people that you found a bigger bigger table
for( let guest of guestlist){
    console.log(`Hello, ${guest},we found a bigger table.`)
}
//step2 add a new guest to biginning of array
let newGuestAtBiginning:string=`Ali`
guestlist.unshift(newGuestAtBiginning)
console.log(guestlist)
//3rd step add 1 guest at the middle of array
let newGuestInMiddle:string="Mian Asif"
let middleIndex:Math.floor(guestlist/2)
guestlist.splice(middleIndex,0,newGuestInMiddle)
console.log(guestlist)
//step4 use apend()to add new guest to the end of your list
let newGuestAtEnd:string="Muhammad Ali"
guestlist.push(newGuestAtEnd)
console.log(guestlist)
//print a new set of invitation messages:
console.log("new set of invitation messages")
for(let guests of guestlist){
    console.log(`dear${guests},you are invited to dinner`)
}