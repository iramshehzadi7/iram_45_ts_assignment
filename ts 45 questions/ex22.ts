/*International error:If you haven't received an array index error in one of your programs yet,Try to make one happen
Change an index in one of your programs to produce an index error.Make sure you correct the error before close
the program*/

//function to create a fruir object
function createFruit(name:string,color:string,
    taste:string) {
        return {
            name,
            color,
            taste,
        };
        
    }
    //create a array of fruits
    const fruits = [
        createFruit("Apple","Red","Sweet"),
        createFruit("Banana","Yellow","Sweet"),
        createFruit("Orange","Orange","Citrusy"),
        createFruit("Strawberry","Red","Sweet"),
    ];

    //Access an invalid inbox
    const invalidIndex = 10;//There are only 5
    console.log('Fruit at index ${invalid index}:',fruits
    [invalidIndex]);

    //print the fruits
    fruits.forEach((fruit)=>{
        console.log('Name:${fruit.name},
        Color:${fruit. color},Taste:${fruit.taste}');

    });
    export{};