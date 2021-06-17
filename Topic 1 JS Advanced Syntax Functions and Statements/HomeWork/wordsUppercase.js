function main(input) {
	let regex = /[A-z]+/g;
	let mapInput = input.match(regex);
	for (let i = 0; i < mapInput.length; i++) {
		let word = mapInput[i].toUpperCase();
		mapInput[i] = word;
	}
	if (mapInput.length > 1) {
		console.log(mapInput.join(", "));
	} else {
		console.log(mapInput.join());
	}
}
main("Hi, how Are you?");
main("hello!");
