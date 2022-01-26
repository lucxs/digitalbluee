let miForm = document.getElementById("formulario");
let boton = document.getElementById("boton");
let campo = document.getElementById("caja")

boton.addEventListener('click', (ev)=>{
ev.preventDefault(); /**Previene que por defecto se disparo el envio del formulario, o cualquier redirección */
var valor = campo.value /**Con value accedo al contenido del input y puedo verificar los datos */
if(valor == "Lucas"){

    alert("el campo dice Lucas")}
    else
    {
        alert("El campo no dice lucas")
    }


});


