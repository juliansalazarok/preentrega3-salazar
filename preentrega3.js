
let arreglo_estadia = [];
let estadia_ls = "estadia";

function calcular_estadia(){

    let cant_noches = document.getElementById("noches");
    let alojamientos = document.getElementById("alojamientos");
    let cant_huespedes = document.getElementById("huespedes");

    let estadia = { noches:cant_noches.value , alojamiento:alojamientos.value , huespedes:cant_huespedes.value};

    arreglo_estadia.push(estadia);


    let arreglo_JSON = JSON.stringify(arreglo_estadia);
    localStorage.setItem(estadia_ls , arreglo_JSON);

    getEstadia();

}

function getEstadia(){
    
    let recuperando = JSON.parse(localStorage.getItem(estadia_ls));
    
    if(recuperando){
        mostrar_estadia(recuperando[recuperando.length-1])

    }

}


function mostrar_estadia(recuperando){
    let fila = document.createElement("tr");
    fila.innerHTML = `<td>${recuperando.noches}</td>
                    <td>${recuperando.alojamiento}</td>
                    <td>${recuperando.huespedes}</td>`;
    
    let tbody = document.getElementById("tbody");
    tbody.append(fila);

}


let btn_buscar = document.getElementById("btn_buscar");

btn_buscar.addEventListener("click" , calcular_estadia );







