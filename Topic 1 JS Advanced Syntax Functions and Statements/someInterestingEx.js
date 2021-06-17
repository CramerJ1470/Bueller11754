// Data Types•
console.log(typeof NaN); //number
console.log(NaN === NaN); //false
console.log(typeof null); //object(legacy reasons)
console.log(null instanceof Object); //false
console.log(new Array() == false); //true
console.log(0.1 + 0.2); //0.30000000000000004
console.log((0.2 * 10 + 0.1 * 10) / 10); //0.3

//Truthy and Falsy values
let variable = []; //empty array
console.log(variable == false); //evaluates true
if (variable) {
	console.log("True!");
} //variable evaluates to true
