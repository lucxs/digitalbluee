let miDiv = document.querySelector("#root");
function cargarListado(){

    let url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    fetch(url) /*Con esta función toma lo que hay en la url pasandole como parametro la variable */
    .then((response)=>{return response.json()})/*callbuck - función flecha- que maneja la respuesta, retornando esos datos que recibimos en un archivo json */
    .then((ObjectJson)=>{
        const pokemons = ObjectJson.results;
        console.log(pokemons)
        pokemons.forEach((p)=>{
            miDiv.innerHTML+=`
            <button class="btn btn-primary m-2 col-5" onclick="crearImagen('${p.url}')">${p.name}</button>
            `;
        })
    })



}
cargarListado();
let img =" ";
const crearImagen=(url)=>{
    fetch(url).then(res=>{return res.json()}).then((obj)=>{
        img=obj;
        console.log(img);
        cargarCarta(img);
    })
}
const cargarCarta=(pk)=>{
    let contenedor = document.querySelector("#img");
    let moves = pk.moves;
    let mostrar="";
    moves.forEach((p)=>{
       mostrar+= `<option class="card-text">${p.move.name}</option>`
    });

    let plantilla=` 
        <div class="card" style="width: 18rem;">
                <img src="${pk.sprites.front_default}" class="card-img-top">
                <div class="card-head">
                    <h5 class="card-title text-center">${pk.name}</h5>
                </div>
                <div class="card-body">
                <label>Movimientos</label>
                <select class="dorm-select">
                ${mostrar}
                </select>
                </div>
        </div>
    `;

    contenedor.innerHTML=plantilla;

}