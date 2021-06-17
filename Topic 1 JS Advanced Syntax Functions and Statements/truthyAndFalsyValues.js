function logTruthiness(val) {
	if (val) {
		console.log("Truthy!");
	} else {
		console.log("Falsy.");
	}
}
logTruthiness(3.14); //Truthy!
logTruthiness({}); //Truthy!
logTruthiness(NaN); //Falsy.
logTruthiness("NaN"); //Truthy!
logTruthiness([]); //Truthy!
logTruthiness(null); //Falsy.
logTruthiness(""); //Falsy.
logTruthiness(undefined); //Falsy.
logTruthiness(0); //Falsy.

let rider = {
	age: 18,
	height: 100,
};
let rider2 = {
	age: 2,
	height: 10,
};
console.log(
	rider2.age > 12 || rider2.height >= 48 ? "true can ride" : "false no ride"
);

let someArray = new Array();
let someObject = new Object();
someObject.pet = "DOG";
someArray.push("cat");
console.log(someArray);
console.log(someObject);
count = 10;
printStars(count);
function printStars(count) {
	/// gets hoisted
	console.log("*-".repeat(count));
}
// let and = function()  not hoisted

let walk = (dogName) => {
	// not hoisted
	console.log("walking", dogName);
};
walk("Zaphod");

function foo(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
foo(1, "", 2); // 1,2 == [1,'',2]

function printStart(count = 5) {
	// if there isn't a arguement provided, use this ; else use provided arg
	console.log("*".repeat(count));
}
printStars();
printStars(10);

function printName(firstName, lastName) {
	let name = firstName;
	if (lastName != undefined) {
		name += " " + lastName;
	}
	console.log(name);
}
let array1 = ["the", "cat", "in", "the", "hat"];
printName("Zaphod", array1.join(" "));
