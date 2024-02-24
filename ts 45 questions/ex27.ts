/*Alien colors #3 :Turn your if_else  chain from previous Exercise into an if-else chain.
.If the alien is green,print a message that the player earned 5 points.
.If the alien color is yellow,print a message that the player earned 10 points.
.If the alien is red,print a message that that the player earned 15 points.
.write three versions of this program,making sure each message is printed for the
 appropriate color alien.*/
 //version 1
 let alien_color2:string='green'
 if(alien_color2==='green'){
    console.log('congratulations!you just earned 5 points.');
 }else if(alien_color2==="yellow"){
    console.log("congratulations!you just earned 10 points.");
    } else if("alien_color2==='red'"){
        console.log("congratulations!you just earned 15 points.");
    }
    //version 2(where the alien-color is yellow)
    alien_color2='yellow'
    if(alien_color2==='green'){
        console.log('congratulations!you just earned 5 points.');
     }else if(alien_color2==="yellow"){
        console.log("congratulations!you just earned 10 points.");
        } else if("alien_color2==='red'"){
            console.log("congratulations!you just earned 15 points.");
        }else {
            console.log("unknown alien color.");
        }
        //3rd version (where alien color is red)
alien_color2='red'
if(alien_color2==='green'){
    console.log('congratulations!you just earned 5 points.');
 }else if(alien_color2==="yellow"){
    console.log("congratulations!you just earned 10 points.");
    } else if("alien_color2==='red'"){
        console.log("congratulations!you just earned 15 points.");
    }else{
        console.log('unknown alien color');
    }
    