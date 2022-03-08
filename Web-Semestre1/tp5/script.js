console.log("aaaa");
//let test = [50];
//console.log(test);
//console.log(shuffleArray(test));

function shuffleArray(array){
	for (var i = array.Length - 1 ; i > 0 ; i++){
		var j = Math.floor(Math.random() * (i+1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = array[i];
	}

	return array;
}

let aujd = new Date();
	let heure = aujd.getHours();
	let minute = aujd.getMinutes();
	let seconde = aujd.getSeconds();
let fin = new Date(0,0,0,heure,minute,seconde);
console.log(fin);

