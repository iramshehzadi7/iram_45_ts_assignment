/*cities:write a function called describe_city()that accepts the name of a city and its country.The function should print asimple sentence,such as
Karachi is in Pakistan.Give the parameter for the country a default value.Call your function for three different cities,at least one of which is
not in default country*/
function describe_city(city:string,country:string="unknown country"):void{
    console.log(`${city} is in ${country}.`);
}
//calling the function for three different cities
describe_city("Karachi","Pakistan");
describe_city("New york");//using the default country value
describe_city("Barlin","Germany");