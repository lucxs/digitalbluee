let principal = document.querySelector("div");

window.onload =()=>{

       // console.log(principal)

            principal.innerHTML=`
            
            <input class="btn btn-primary m-3" type="button" onclick="cambiar('bg-danger')" value=" cambiar color">
            <input class="btn btn-primary m-3" type="button" onclick="cambiar('bg-primary')" value=" cambiar color">
            <input class="btn btn-primary m-3" type="button" onclick="cambiar('bg-secundary')" value=" cambiar color">
            `

}

let colores = ['bg-danger', 'bg-primary', 'bg-info', 'bg-success', 'bg-info',
'bg-warning','bg-dark']

const cambiar=(color)=>{

            principal.classList.toggle(color)/*o toggle que pone y saca el evento*/


}

setInterval(()=>{

    cambiar(colores[3])
},1000)
    
    
    
    
    /**ayuda a que una función se ejecute solo en un tiempo determinado */

