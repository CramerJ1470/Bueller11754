function main(n, m) {
	function sumOfNum(n, m) {
		let start = Number(n);
		//	console.log(start);
		let finish = Number(m);
		//	console.log(finish);
		let result = 0;
		for (let x = start; x <= finish; x++) {
			result = result + x;
		}
		return result;
	}
	console.log(sumOfNum(n, m));
}

main("1", "5");
main("-8", "20");
