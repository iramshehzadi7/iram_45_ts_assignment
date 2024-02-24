//changing guest list:one guest can not come.sent new invitations including
//a new guest.you just hear that one of your guest can not make the dinner
//so you need to send out a new set of invitations.you will have to think of some
//.print a second set of invitation message
let guestlist1:Array<string>=[
    "Zia khan",
    "Jahanzaib Tayab",
    "Muhammad Ali Jinnah",
];
//step 1.print the name of person who can't make it
let guestWhoCantMakeIt:string="Muhammad Ali Jinnah"
console.log(`{guestWhoCantMakeIt}cant make it to dinner`)
//step2.replace the name of guest cant make it.
let NewGuest:string=`Abid shirvani`
let indexOfguestWhoCantMakeIt:number=guestlist.indexOf(guestWhoCantMakeIt)
console.log(indexOfguestWhoCantMakeIt);
if(indexOfguestWhoCantMakeIt!==-1)
guestlist1[indexOfguestWhoCantMakeIt]= NewGuest
console.log(guestlist[2])
//step3.print a second set of invitation messages
console.log("second set of invitation messages:")
guestlist.forEach((guest:string)=>
console.log(`dear ${guest}you are invited to dinner.`))


export{guestlist1}