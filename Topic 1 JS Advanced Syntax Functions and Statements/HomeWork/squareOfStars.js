function main(num = 5) {
	let string = "";
	//	if (num == undefined) {
	//		console.log("* ".repeat(5));
	//	}

	for (let i = 1; i <= num; i++) {
		string = string + "* ";
	}
	for (let j = 1; j <= num; j++) {
		console.log(string.trim());
	}
}
main(1);
main(2);
main(5);
main(6);
main();
main(10);

main(1);
main(2);
main(5);
main(6);
main();
main(10);