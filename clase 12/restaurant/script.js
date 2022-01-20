/*let div = document.getElementById("cantMesas");

let mesa1 = {numero:1,libre:false,pedido:false,pagar:false,numMozo:1}
console.log(mesa1);

const mesa2=(num,libre,pedido,pagar,numMozo)=>{
    this.numero=num;
    this.libre=libre;
    this.pedido=pedido;
    this.pagar=pagar;
    this.numMozo=numMozo;
}

let mesa= new mesa2(2,false,false,false,1); */ /* POO */

class Restaurante{
mesas=[];
constructor(cantmozos,suc=0){
    this.suc=suc;
    this.cantmozos=cantmozos;
    this.cantMesas = this.cantmozos * 6;
    this.libre=false;
    this.pedido=false;
    this.pagar=false;
    this.crearMesas(this.cantMesas,this.libre,this.pedido,this.pagar,this.suc);
}

crearMesas(cm, lib, pd, pg, numS){

        for(let a =0; a < cm; a++){
            let mozo=1
            if(a < 6){mozo=mozo}else if(a < 12){mozo=2}
            else if(a < 18){mozo=3}else if(a < 24){mozo=4}
            else if(a < 30){mozo=5}
            this.mesas.push({libre:lib, pedido:pd, pagar:pg, sucnum:numS,mozo});
        }
       this.dibujarMesas()
       

}

dibujarMesas(){

    let div = document.getElementById("cantMesas");
    this.mesas.forEach((mesa,index)=>{
        let lugar = index + 1;
        let bntL = "btn"+lugar;
        let lib = "estado"+lugar;
        div.innerHTML += `
            <div id=${lugar} class="bg-success col-4 m-3 text-white">
                <h5  class="text-center">Mesa Nº ${lugar} </h5>
                <h6>Mozo Nº ${mesa.mozo}</h6>
                <p id=${lib}>Libre</p>
                <div>Pedido</div>
                <input id=${bntL} type="submit"  class="btn btn-primary" value="Hacer-Pedido">
                <button class="btn btn-primary" disable>Pagar</button>
            </div>
        
            `;
    });

    let todas = document.querySelectorAll("input");
    todas.forEach((toda)=>{
        toda.addEventListener('click',(e)=>{
            console.log(e.target.id);
            console.log(e.target.parentNode);
            let miDiv = document.getElementById(e.target.parentNode.id);
            let libre = document.getElementById(e.target.parentNode.children[2].id);
            libre.classList.add("text-danger");
            miDiv.classList.remove("bg-success");
            miDiv.classList.add("bg-danger");

    })
    
        
    })

}

formPedido(){

    return `
        <h5>Pedido</h5>
    
    ` 
};

}

let suc1 = new Restaurante(5,1);
//suc1.crearMesas(suc1.cantMesas,suc1.libre,suc1.pedido,suc1.pagar,1);

