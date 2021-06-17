function main(input) {
	let current = {};
	console.log(`</table>`);
	for (let x = 0; x < input.length; x++) {
		current = JSON.parse(input[x]);
		//	console.log(current);
		console.log(`  <tr>`);
		console.log(`    <td>${current.name}</td>`);
		console.log(`    <td>${current.position}</td>`);
		console.log(`    <td>${Number(current.salary)}</td>`);
		console.log(`  </tr>`);
	}
	console.log(`</table>`);
}
function htmlEncode(text) {
	return text
		.replace(/'/g, "")
		.replace(/{/g, "")
		.replace(/"/g, "")
		.replace(/}/g, "");
}

/*	console.log(`<table>`);
	for (let i = 0; i < input.length; i++) {
		console.log(`  <tr>`);
		let current = input[i].split(/[,:]+/);
		//	console.log(current);

		console.log(`    <td>${htmlEncode(current[1])}</td>`);
		console.log(`    <td>${htmlEncode(current[3])}</td>`);
		console.log(`    <td>${Number(htmlEncode(current[5]))}</td>`);
		console.log(`  </tr>`);
	}
	console.log(`</table>`);
}
*/
main([
	'{"name":"Peter","position":"Manager","salary":100000}',
	'{"name":"Teo","position":"Lecturer","salary":1000}',
	'{"name":"George","position":"Lecturer","salary":1000}',
]);
function escaping(text) {
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}
