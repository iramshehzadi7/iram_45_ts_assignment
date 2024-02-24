/*city name:write a function city_country()that takes in the name of its country.The function should return a string farmatted like this:"Lahore"
,"Pakistan".Call your function with at least three pair of city_country,and returned the value*/
//arrow function
const city_country=(city:string,country:string):string=>{
    return`&{city},${country}`;
}
//test the function with three cith_country pairs
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("New York","USA"));
console.log(city_country("Tokyo",'Japan'));