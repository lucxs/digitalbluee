/*document.write("hola");*/

function centrar(){
document.getElementById("parrafo").align="center";

}

function color(){

    document.getElementById ("parrafo").style.color="green";

}


function agrandar(){

    
    document.getElementById("parrafo").style.fontSize="26px";

}

let uno= 1;
let dos= "2";

console.log(uno == dos);

//Parseamos
let number = "10.2568585587";

let parseado = parseInt(number);

console.log(parseado);


function edad(){


let edad = document.getElementById("edad");
let laEdad = edad.value;

console.log(laEdad);

if(laEdad > 17){
    alert("Es mayor porque tiene: " + laEdad)
} 
else{
    alert("Es menor porque tiene: " + laEdad)
}

}