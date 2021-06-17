function main(input) {
	let endArray = [];
	let carObjArray = [];
	class Car {
		constructor(car, model, produced) {
			this.car = car;
			this.model = model;
			this.produced = produced;
			this.modelProduced = model + ":" + produced;
		}
	}

	// ======================set to objects:==========================
	for (j = 0; j < input.length; j++) {
		let newInput = input[j].split(" | ");
		let car = newInput[0];
		let model = newInput[1];
		let produced = Number(newInput[2]);
		let carObj = new Car(car, model, produced);
		carObjArray.push(carObj);
	}
	console.log(carObjArray);
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
