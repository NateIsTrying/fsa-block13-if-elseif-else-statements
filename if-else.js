//IS TRUTHY

// create variable and assign it a value;
const isTruthy = `milkshake`;

// created prompt and store it in a const, so if/else-if/else statement can use the prompted 'isTruthy', for testing use only.
// const isTruthy = prompt('Please provide a truthy or falsy value.');

//boolean value false is used, print 'The boolean value false is falsy', gonna make this an 'if' condition.;
if(isTruthy === false){
    alert(`The boolean value '${isTruthy}' is falsy.`);
}

// null value is used, print 'the null value is falsy', gonna place in 'else if' as other falsy conditions are too distinct
// and must be put in their own if/else if;
else if(isTruthy === null){
    alert(`the '${isTruthy}' value is falsy.`);
}

// undefined value used, print 'undefined is falsy';
else if(isTruthy === undefined){
    alert(`'${isTruthy}' is falsy.`);
}

// number 0 is used, print 'the number 0 is falsy (the only falsy number)'
else if(parseInt(isTruthy) === 0){
    alert(`the number '${isTruthy}' is falsy (the only falsy number).`);
}

// empty string is used, print 'the empty string is falsy (the only falsy string)'
else if(isTruthy === ``){
    alert(`the empty string ('') is falsy (the only falsy string).`);
}

// if value is truthy, print true - gonna make this an 'else' because its a broad category of things it can be strings, numbers, etc., the falsy's are more rare;
else {
    alert(true);
}

//NUMBER LINE
// Goal is to take 2 numbers get a sum and print out messages if its:
const num1 = -500;
const num2 = -12;

//prompt version of num1 and num2;
// const num1 = prompt('Please provide a first number.');
// const num2 = prompt('Please provide a second number.');

// 0. get 2 num's and add them into variable 'sum';
// changed num1 and num2 by adding parseInt, to turn strings of num's into numbers. 
const sum = num1 + num2;
alert(`The sum of the numbers is: ${sum}.`);
// 1. Greater than 100; The 'if' statement, sum > 100
if(sum > 100){
    alert(`${sum} is greater than 100.`);
}
// 2. Less than 101 and greater than 0; else if, num is less than 101 and greater than 0; 
else if(sum <= 100 && sum > 0){
    alert(`${sum} is greater than 0.`);
}
// 3. Equal to 0; Use triple ='s to make it strict;
else if(sum === 0){
    alert(`${sum} is equal to 0.`);
}
// 4. Is a negative number, -1000 or greater til 0; 
else if(sum < 0 && sum > -1000){
    alert(`${sum} is a negative number greater than -1000.`);
}
// 5. Is less than -1000; this is the 'else' statement
else {
    alert(`${sum} is a negative number less than -999.`);
}

//GREATER THAN 5;

//create 2 variables with numbers;
const numOne = prompt('Please provide another first number.');
const numTwo = prompt('Please provide another second number.');

//BOTH conditions must be greater than or equal to 5; So the logic operator MUST be && not ||;
if(numOne >= 5 && numTwo >= 5){
    alert(true);
}

//else would apply only if -> either number is less than 5;
else {
    alert(false);
}

//PAIR AND COMPARE

// param1A 	param1B 	param2A 	param2B 	Expected Print
//Y "cat" 	     "cat"  	   6 	     "6" 	    true
//Y "five" 	       5 	     "dog" 	    "dawg" 	    false
//Y   0 	     false 	    "horse" 	"horse" 	true
//Y "eight" 	"eight" 	"ate" 	    "ate" 	    true
//Y  11 	    "eleven" 	"four" 	    "for" 	    false
//Y "cake" 	    "cake" 	    "pie" 	    "pie" 	    true

// create 4 parameters;
// param1A, param1B;
const param1A = `cake`;
const param1B = 'cake';

// param2A, param2B;
const param2A = `pie`;
const param2B = `pie`;

// if statement will include &&'s and/or ||'s, will need to be 
// tested with above parameters;

// observed chart of param values; it only evaluates 'true' when 
// either param1A and param1B OR param2A and param2B are 
// STRICTLY equal.

if(param1A === param1B || param2A === param2B){
    console.log(true);
} else {
    console.log(false)
}

//Pair and Compare: 'Ternary Operator' version;
// (param1A === param1B || param2A === param2B) ? console.log('Ternary',true) : console.log('Ternary',false);
// looks complicated but its easy. think of the below as commands to Javascript & how the ternary operator works.
// (THE 'if' condition) 'JS listen to this/look here' ? THE `if` condition is true DO WHATS HERE : THE `if` condition is false DO WHATS HERE;