//Arrays

let juegos = ["1", "2", "3"];
juegos.push("gaplus"); //empuja, introduce
juegos.pop(); //borra el ultimo
juegos.unshift("Monkey island"); //agrega un elemento al array al final
console.log(juegos);

//for

var nombre = prompt("Cual es tu nombre");
var edad = prompt("Cual es tu edad");

for(i=0; i < 5; i+=2)//de esta manera hariamos un contador de incremente de multiplo del num que se requiera. Sino se hace la manera convencional: i++
{

    console.log("el numero de i es:" + i);
}

