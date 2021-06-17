function main(num1, num2, num3) {
	function largestNum(num1, num2, num3) {
		if (num2 > num3) {
			if (num1 > num2) {
				answer = num1;
			} else {
				answer = num2;
			}
		} else if (num3 > num2) {
			if (num3 > num1) {
				answer = num3;
			} else {
				answer = num1;
			}
		}
		console.log(`The largest number is ${answer}.`);
	}
	largestNum(num1, num2, num3);
}
main(5, -3, 16);
main(-3, -5, -22.5);
//let numbers = [num1,num2,num3];
// numbers.sort((a,b) => b-a);

//function main(num1, num2, num3){
//let results = Math.max(num1, num2, num3);
// console.log(`The largest number is ${results}.`);
//}
// console.log(Math.sqrt(Math.PI));
