function main(num) {
	parseFloat(num);
	let i;
	let sum = 0;
	for (i = 0; i < num.length; i++) {
		if (i !== 0 && num.index[i] !== num.index[i - 1]) {
			console.log(`false`);
		} else {
			console.log(`true`);
		}
		sum += num.index[i];
	}
	console.log(sum);
}

main(232);
