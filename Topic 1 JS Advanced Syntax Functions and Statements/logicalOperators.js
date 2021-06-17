let val = true && "yes" && 5 && null && false;
console.log(val); // null
val = true && "no" && 5 && 25 && "yes";
console.log(val); // 'yes'
//  ||    //
let val = false || 0 || "" || 5 || "hi" || true;
console.log(val); // 5
val = false || "" || null || NaN || undefined;
console.log(val1); // undefined

let val = !true console.log(val); // false
let val = !false;
 console.log(val); // true
