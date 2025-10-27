// Numbers:
1;
-99;
0.345345;

//Making variables with let:
let numberOfFriends = 1;
console.log(numberOfFriends);

//Incrementing:
numberOfFriends += 3; //numberOfFriends is now 4
console.log(numberOfFriends);

// Variables with const
const minimumAge = 21; //CANNOT REASSIGN!
console.log(minimumAge);

//Booleans - true or false values
true;
false;
let isHappy = true;
console.log(isHappy);

//Naming Conventions
// Use upper camel-cased names:
let numberOfChickens = 6; //GOOD
// NOT THE JS WAY:
// let number_of_chickens = 6;
console.log(numberOfChickens);

let age = 16;
let country = "USA";
let text = "You can Not drive!";

if(country == "USA"){
    if (age >= 16){
        text = "You can drive!";
    }
}
