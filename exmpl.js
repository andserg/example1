console.log("Create array");
var a = "Alpha";
var b = "Beta";
var c = "Gamma";
var d = "Delta";
var array = [];

for(var i=1; i <= 100 ; i++) {
	array[i] = i;
	console.log(array[i]);
}

console.log("Array was created");

/* Checking conditions */

for(var i=1; i <= 100 ; i++) {
	if(array[i] % 3 === 0 && array[i] % 5 === 0) {
		array[i] = a + b;
	}
	if(array[i] % 3 === 0 && array[i] % 7 === 0) {
		array[i] = a + c;
	}
	if(array[i] % 3 === 0 && array[i] % 11 === 0) {
		array[i] = a + d;
	}
	if(array[i] % 5 === 0 && array[i] % 7 === 0) {
		array[i] = b + c;
	}
	if(array[i] % 5 === 0 && array[i] % 11 === 0) {
		array[i] = b + d;
	}
	if(array[i] % 7 === 0 && array[i] % 11 === 0) {
		array[i] = c + d;
	}
	if(array[i] % 3 === 0) {
		array[i] = a;
	}
	if(array[i] % 5 === 0) {
		array[i] = b;
	}
	if(array[i] % 7 === 0) {
		array[i] = c;
	}
	if(array[i] % 11 === 0) {
		array[i] = d;
	}
}

console.log("Print array with replacement.");
for(var i=1; i <= 100 ; i++) {
	console.log(array[i]);
}