function main(input) {
	function moveColon(text) {
		return text.replace(/\s[:]/g, ":");
	}
	let inputObj = {};
	let letter = "";
	storeMap = [];
	for (j = 0; j < input.length; j++) {
		currentLetter = input[j].charAt(0);
		if (!storeMap.includes(currentLetter)) {
			storeMap.push(currentLetter);
			storeMap.push(input[j]);
		} else if (storeMap.includes(currentLetter)) {
			let index = storeMap.indexOf(currentLetter);
			storeMap.splice(index + 1, 0, input[j]);
		}

		//console.log(storeMap);
	}

	//	console.log(storeMap);
	let each = 0;
	let tempArray = ``;
	let finalArray = [];
	storeMap.sort();
	while (storeMap[each] != undefined) {
		if (storeMap[each].length == 1) {
			console.log(storeMap[each]);
		} else if (storeMap[each].length > 1) {
			console.log(`  ${moveColon(storeMap[each])}`);
		}
		each++;
	}
}
main([
	"Appricot : 20.4",
	"Fridge : 1500",
	"TV : 1499",
	"Deodorant : 10",
	"Boiler : 300",
	"Apple : 1.25",
	"Anti-Bug Spray : 15",
	"T-Shirt : 10",
]);
main([
	"Banana : 2",
	"Rubic's Cube : 5",
	"Raspberry P : 4999",
	"Rolex : 100000",
	"Rollon : 10",
	"Rali Car : 2000000",
	"Peter : 0.000001",
	"Barrel : 10",
]);
