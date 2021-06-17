function main(num1, num2, operator) {
	let mathAdd = (num1, num2) => num1 + num2;
	let mathSubtract = (num1, num2) => num1 - num2;
	let mathDivide = (num1, num2) => num1 / num2;
	let mathMultiply = (num1, num2) => num1 * num2;
	let mathModulus = (num1, num2) => num1 % num2;
	let result = 0;
	switch (operator) {
		case "+":
			result = mathAdd(num1, num2);
			break;
		case "-":
			result = mathSubtract(num1, num2);
			break;
		case "/":
			result = mathDivide(num1, num2);
			break;
		case "*":
			result = mathMultiply(num1, num2);
			break;
		case "%":
			result = mathModulus(num1, num2);
			break;
		case "**":
			result = mathSquare(num1, num2);
			break;
	}

	console.log(result);
}
main(5, 6, "+");
main(3, 5.5, "*");
