document.getElementById("parrafo").style.textAlign="center";

function verde(){

document.getElementById("parrafo").style.color="green";

}

function jugar(){

let numeroRandom = Math.random(); //tiro random
let numPorDiez = numeroRandom * 10; //Multi por 10 ya que siempre dará un valor decimal igual a 0.n
let numEntero = parseInt(numPorDiez); //Parseo para borrar decimales

//let usuario = prompt("piedra papel o tijera?");

//entre 6 y 9 piedra
//entre 3 y 6 papel
//resto tijera

if(numEntero > 6 ){


    

        document.getElementById("img").src = "img/piedra.png";
    
}
else if( numEntero > 3){

    

        document.getElementById("img").src = "img/papel.png";
    
}

else{

    

        document.getElementById("img").src = "img/tijera.png";
    

}

}




//Vemos switch

let autos ="subura";



switch(autos){


    case "bmw":
        document.getElementById("parrafo").innerHTML = "no atendemos" + autos;
        console.log("No trabajamos " + autos);
        break;

        case "subura":
        console.log("No trabajamos " + autos);
        break;

        default: 
        alert("No trabajamos con esas marcas");
        console.log("No trabajamos con esas marcas");




}