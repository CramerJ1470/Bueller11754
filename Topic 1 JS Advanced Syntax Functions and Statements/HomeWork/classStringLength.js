/* Class
function main(str1, str2, str3) {
	let sumOfStrings = str1.length + str2.length + str3.length;
	console.log(sumOfStrings);
	let averageLength = sumOfStrings / 3;
	console.log(Math.floor(averageLength));
}
*/

function main(a, b, c) {
	let totalLength = a.length + b.length + c.length;
	let averageLength = Math.floor(totalLength / 3);
	console.log(totalLength);
	console.log(averageLength);
}
main("chocolate", "ice cream", "cake");
main("pasta", "5", "22.3");
