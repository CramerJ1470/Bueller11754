function main(order) {
	function bottlesJuice(juice, amount) {
		if (amount >= 1000) {
			console.log(`${juice}=>${Math.floor(amount / 1000)}`);
		}
	}
	let juiceArray = [];
	let finalJuice = [];
	let leftOverJuice = [];
	for (let i = 0; i < order.length; i++) {
		let juice = order[i].split(" => ");
		juiceArray.push(juice[0]);
		juiceArray.push(juice[1]);
	}
	//	console.log(juiceArray);
	for (let j = 0; j < juiceArray.length; j += 2) {
		let juiceFlavor = juiceArray[j];
		//console.log(juiceFlavor);
		if (finalJuice.includes(juiceFlavor)) {
			finalJuice[finalJuice.indexOf(juiceFlavor) + 1] =
				finalJuice[finalJuice.indexOf(juiceFlavor) + 1] +
				Number(juiceArray[j + 1]);
		} else if (
			!finalJuice.includes(juiceFlavor) &&
			Number(juiceArray[j + 1]) >= 1000
		) {
			//	console.log(juiceFlavor);
			finalJuice.push(juiceArray[j], Number(juiceArray[j + 1]));
		} else if (
			!finalJuice.includes(juiceFlavor) &&
			Number(juiceArray[j + 1]) < 1000
		) {
			if (leftOverJuice.includes(juiceFlavor)) {
				let index = leftOverJuice.indexOf(juiceFlavor);
				if (
					leftOverJuice[index + 1] + Number(juiceArray[j + 1]) >=
					1000
				) {
					finalJuice.push(
						juiceArray[j],
						leftOverJuice[index + 1] + Number(juiceArray[j + 1])
					);
				}
			} else if (!leftOverJuice.includes(juiceFlavor)) {
				leftOverJuice.push(juiceArray[j], Number(juiceArray[j + 1]));
			}
		}
	}
	//console.log(finalJuice);
	for (let k = 0; k < finalJuice.length / 2; k++) {
		let juice = finalJuice[k * 2];
		let amount = finalJuice[k * 2 + 1];
		console.log(`${juice} => ${Math.floor(amount / 1000)}`);
	}
}
main([
	"Orange => 2000",
	"Peach => 1432",
	"Banana => 450",
	"Peach => 600",
	"Strawberry => 549",
]);
main([
	"Kiwi => 234",
	"Pear => 2345",
	"Watermelon => 3456",
	"Kiwi => 4567",
	"Pear => 5678",
	"Watermelon => 6789",
]);
main(["Mango => 500", "Mango => 600", "Apple => 800", "Mango => 1000"]);
/*
function main(juices) {
	let fullbottles = new Map();
	let incompletedBottles = new Map();

	for (i = 0; i < juices.length; i++) {
		let juiceInput = juices[i].split(" => ");
		let juiceName = juiceInput[0];
		let juiceAmount = Number(juiceInput[1]);
		//		console.log(juiceName, juiceAmount);

		if (fullbottles.has(juiceName)) {
			let currentJuiceAmount = fullbottles.get(juiceName);
			let newJuiceAmount = currentJuiceAmount + juiceAmount;
			fullbottles.set(juiceName, newJuiceAmount);
		} else {
			if (juiceAmount >= 1000) {
				fullbottles.set(juiceName, juiceAmount);
			} else {
				if (incompletedBottles.has(juiceName)) {
					let newIncompleteJuiceAmt =
						juiceAmount + incompletedBottles.juiceName;
					incompletedBottles.set(juiceName, newIncompleteJuiceAmt);
					if (newIncompleteJuiceAmt >= 1000) {
						fullbottles.set(juiceName, newIncompleteJuiceAmt);
					}
				} else {
					incompletedBottles.set(juiceName, juiceAmount);
				}
			}
		}
	}
	//	console.log(fullbottles);
	for (let [name, quantity] of fullbottles) {
		console.log(name + ` => ${Math.floor(quantity / 1000)}`);
	}
}
*/
