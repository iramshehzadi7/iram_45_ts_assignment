/*hello admin:make a array of five or more namesincluding the name'admin'.Imagine you are writing
code that will print a greeting to each user after they log in to a website.loop through the arra
and print a greeting to each
.if the user name is 'admin',print a special greeding such as'hello admin,would you like to
 see a status report?
 .otherwise print a generic greeding,such as 'hello eric,thank you for loggin in again*/
 const userNames:string[]=["admin","mani","rimi","kami","falak"];
 function greetusers():void{
 for(const i in userNames){
    if userNames[i].toLowerCase()===("admin"){
        console.log("hello admin,would you like to see a status report");

    }else{
        console.log("hello ${userNames[i],thank you for logging in again.");
    }
 }
}