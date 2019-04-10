// you can write js here
var kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?");
//let kelvin = 294 ;
let celsius = kelvin - 273; //affectation à celsius la  soustraction 273 à  294 (kelvin)
let fahrenheit = celsius * (9/5) + 32 ; // multiplier celsius à la division 9/5 puis lui ajouer 32

fahrenheit = Math.floor(fahrenheit); // on affecte à fareiheit l'arrondie de fareiheit

console.log(`Température  kelvin : ${kelvin}`);
console.log(`Température  celsius : ${celsius}`);
console.log(`Température  fahrenheit : ${fahrenheit}`);



