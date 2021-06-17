function main(input) {
	let objName = {};
	let finalArray = [];
	for (let i = 0; i < input.length; i++) {
		let current = input[i].split(" / ");
		objName.name = current[0];
		objName.level = Number(current[1]);
		let objItems = current[2].split(", ");
		objName.items = objItems;
		finalArray.push(objName);
		objName = {};
	}
	console.log(JSON.stringify(finalArray));
}
main([
	"Isacc / 25 / Apple, GravityGun",
	"Derek / 12 / BarrelVest, DestructionSword",
	"Hes / 1 / Desolator, Sentinel, Antara",
]);
main(["Jake / 1000 / Gauss, HolidayGrenade"]);
