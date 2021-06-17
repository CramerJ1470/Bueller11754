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
	for (j = 0; j < input.length; j++) {
		let newInput = input[j].split(" | ");
		let car = newInput[0];
		let model = newInput[1];
		let produced = Number(newInput[2]);
		let carObj = new Car(car, model, produced);
		carObjArray.push(carObj);
	}
	//console.log(carObjArray);
	let carMap = new Map();

	for (let a = 0; a < carObjArray.length; a++) {
		let currentC = carObjArray[a].car;
		let currentMod = carObjArray[a].model;
		let currentProd = Number(carObjArray[a].produced);
		if (!carMap.has(currentC)) {
			carMap.set(currentC, `/${currentMod}:${currentProd}`);
		} else if (carMap.has(currentC)) {
			let temp = carMap.get(currentC);
			let tempSplit = temp.split(":");
			let addCars = Number(tempSplit[1]);
			if (tempSplit[0] == `/${currentMod}`) {
				carMap.set(
					currentC,
					temp + `${currentMod}:${currentProd + addCars}/`
				);
			}
		}
	}
	var mapAsc = new Map([...carMap.entries()].sort());
	console.log(mapAsc);
	let finalArray = [];
	for (let [key, value] of carMap) {
		finalArray.push([key, value]);
	}
	for (let b = 0; b < finalArray.length; b++) {
		console.log(finalArray[b][0]);
		let split = finalArray[b][1].split("/");

		//		console.log(split);
		for (c = 1; c < split.length; c++) {
			let splitSplit = split[c].split(":");
			console.log(`###${splitSplit[0]}->${splitSplit[1]}`);
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
