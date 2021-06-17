function main(input) {
	let sortedArray = input;
	let carMap = new Map();

	// ======================split to array:==========================
	for (j = 0; j < sortedArray.length; j++) {
		let newInput = sortedArray[j].split(" | ");
		let carCar = newInput[0];
		let carModel = newInput[1];
		let produced = Number(newInput[2]);
		if (!carMap.get(carCar)) {
			carMap.set(carCar, new Map());
		}
		if (!carMap.get(carCar).get(carModel)) {
			carMap.get(carCar).set(carModel, 0);
		}
		carMap
			.get(carCar)
			.set(carModel, carMap.get(carCar).get(carModel) + produced);
	}
	console.log(carMap);

	for (let [carCar, carModelCount] of carMap) {
		console.log(carCar);
		for (let [carModel, produced] of carModelCount) {
			console.log(`###${carModel} -> ${produced}`);
		}
	}
}
main([
	"Audi | Q7 | 1000",
	"Audi | Q6 | 100",
	"BMW | X5 | 1000",
	"BMW | X6 | 100",
	"Citroen | C4 | 123",
	"Volga | GAZ-24 | 1000000",
	"Lada | Niva | 1000000",
	"Lada | Jigula | 1000000",
	"Citroen | C4 | 22",
	"Citroen | C5 | 10",
]);
