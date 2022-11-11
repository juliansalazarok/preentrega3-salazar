// Calculador de precio final de estadía para proyecto de alojamientos turísticos.

/* 
Se pedirá al usuario: 
- alojamiento deseado
- cantidad de noches
- cantidad de huéspedes.


El sistema devolverá: 
- valor por noche
- costo total de la estadía
*/


// Mensaje inicial por consola
//console.log("Calcule el valor de su estadía"); 

// Constantes y función para limpiar strings y devolver numbers
const precio_serrano = 50;
const precio_santelmo = 70;
const precio_bellini = 95;

function precio_depto(depto){

    if(depto == "Serrano" || depto == "serrano"){
        return precio_serrano;
    }
    else if(depto == "San Telmo" || depto == "san telmo"){
        return precio_santelmo;
    }
    else if(depto == "Bellini" || depto == "bellini"){
        return precio_bellini;
    }
    else{
        return
    }
}

// Variables para pedir info de entrada al usuario
//let alojamiento = prompt("Ingrese el alojamiento deseado: Serrano / San Telmo / Bellini");
//let cant_noches = parseInt(prompt("Cuántas noches desea hospedarse?"));
//let cant_huespedes = parseInt(prompt("Cuántas personas se hospedarán? Sin contar menores de 2 años"));

// Función que genera el cálculo deseado
/*function calcular_estadia(alojamiento , cant_noches , cant_huespedes){

    let preciofinal
    if(cant_huespedes <= 2){
        preciofinal = precio_depto(alojamiento);
    }
    else if(cant_huespedes === 3){
        preciofinal = precio_depto(alojamiento)* 1.10;
    }
    else {
        console.log("El máximo de huéspedes que aceptan nuestros alojamientos es de 3 adultos");
    }

    preciofinal = preciofinal * cant_noches;
    
    return preciofinal

}



// Salida por console.log 
    console.log("El valor por noche en " , alojamiento , " es de " , precio_depto(alojamiento));
    console.log("El valor total de su estadía es de: " , calcular_estadia(alojamiento, cant_noches , cant_huespedes));

*/

let arreglo_estadia = [];

function calcular_estadia(){

    let cant_noches = document.getElementById("noches");
    let alojamientos = document.getElementById("alojamientos");
    let cant_huespedes = document.getElementById("huespedes");

    let estadia = { noches:cant_noches.value , alojamiento:alojamientos.value , huespedes:cant_huespedes.value};

    arreglo_estadia.push(estadia);


    let arreglo_JSON = JSON.stringify(arreglo_estadia);
    localStorage.setItem("estadía" , arreglo_JSON);

    mostrar_estadia(recuperando);

}

let recuperando = JSON.parse(localStorage.getItem("estadía"));

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







