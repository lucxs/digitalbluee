function func(){

let usuario = document.getElementById("usuario");
let contraseña = document.getElementById("contraseña");

let usuarioVal = usuario.value;
let contraseñaVal = contraseña.value;

 let med = contraseñaVal.length;

if(med < 8  ){


    alert("error de password");
}
else{

    document.getElementById("resultado").innerHTML = "Bienvenido " + usuarioVal;
}



}