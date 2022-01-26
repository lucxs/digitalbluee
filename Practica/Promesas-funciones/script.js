let div = document.getElementById("div");
let titulo = document.getElementById("titulo");
let boton = document.getElementById("boton");
var lista = document.createElement('ul');
var caja = document.getElementById("caja");
var content = document.getElementById("content")

boton.addEventListener('click', ()=>{

div.style.backgroundColor = "green";
titulo.innerHTML=' activado';
titulo.style.color="white";
boton.style.backgroundColor="red";
content.insertAdjacentHTML('afterbegin', '<h3>Boton activado</h3>');
envioProducto();


})

 /**Promesas */


function envioProducto(){

    return new Promise ( (resolve, reject)=>{ 
    
        let textCaja = caja.value;

        if(textCaja == "entregado" ){
            resolve("Producto entregado");
        }
        else{
            
            reject("Hubo un error en la entrega");}
        


} )

}

envioProducto()
.then(res=>{

console.log("Success " + res);

})

.catch(error=>{
    console.log("Error " + error);
})


