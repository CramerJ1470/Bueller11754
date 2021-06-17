function main(input) {
	function circleArea(input) {
		let inputType = typeof input;
		if (inputType === "number") {
			let radius = input;
			let result = Math.pow(input, 2) * Math.PI;
			console.log(result.toFixed(2));
		} else {
			let result = `We cannot calculate the circle area, because we receive a ${inputType}.`;
			console.log(result);
		}
	}
	circleArea(input);
}
main(5);
main("name");
console.log(25 / 8);
/*

