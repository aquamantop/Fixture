/* Elementos de index.html */
const primeros = document.querySelectorAll(".primero");
const segundos = document.querySelectorAll(".segundo");
const section = document.querySelectorAll("section");
const puesto1 = document.getElementById("puesto1");
const puesto2 = document.getElementById("puesto2");
const paises = document.querySelectorAll(".pais");
const link = document.querySelector("#index");

/* Elementos de sig-fase.html */
const octavosFinal = document.getElementById("octavos");
const octavosPaisesPrimeros = [];
const octavosPaisesSegundos = [];

/* Trabajamos dentro de la ventana */
window.addEventListener("load", () => {
    

    /* Modificamos comportamiento de link para asegurarnos */
    /* de que los grupos hayan sido completados */
    // link.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     alert("Completar fase de grupos");
    // });

    /* Funcion para elegir los primeros puestos */
    firts();

    /* Funcion para elegir los segundos puestos */
    seconds();

});

/* Logica para elegir primer puesto del grupo seleccionado */
function firts () {
    primeros.forEach( element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();   

            let path = e.path[2];

            /* Validamos */
            volver(path.children);

            /* Ocultamos tarjetas */
            section.forEach( s => s.classList.add("hide"));
    
            /* Trabajamos con la tarjeta activa */
            path.classList.remove("hide");

            /* Marcamos pais elegido */
            paises.forEach( e => {
                e.addEventListener("click", () => {
                    volver();
                    console.log(e.innerHTML);
                    primeroDeGrupo(e.innerHTML);
                });
            });
        });
    });
};

function primeroDeGrupo (pais) {
    /* 
    COSAS POR HACER
    Recorrer grupo, si ya hay pais elegido, cambiarlo por la nueva eleccion.
    Agregar distintivo de grupo para luego formas los encuentros de octavos.
    */

    octavosPaisesPrimeros.push(pais);
    console.log(octavosPaisesPrimeros);
};

/* Logica para elegir segundo puesto del grupo seleccionado */
function seconds () {
    segundos.forEach( element => {
        
        element.addEventListener("click", (e) => {
            e.preventDefault();       

            let path = e.path[2];

            /* Validamos */
            volver(path.children);
            
            /* Ocultamos tarjetas */
            section.forEach( s => s.classList.add("hide"));

            /* Trabajamos con la tarjeta activa */
            path.classList.remove("hide");

            /* Marcamos pais elegido */
            paises.forEach( e => {
                e.addEventListener("click", () => {
                    volver();
                    console.log(e.innerHTML);
                    segundoDeGrupo(e.innerHTML);
                });
            });
        });
    });
};

function segundoDeGrupo (pais){
    /* 
    COSAS POR HACER
    Recorrer grupo, si ya hay pais elegido, cambiarlo por la nueva eleccion.
    Agregar distintivo de grupo para luego formas los encuentros de octavos.
    */

    octavosPaisesSegundos.push(pais);
    console.log(octavosPaisesSegundos);
};

/* Boton para volver a ver los grupos */
function volver (seccion) {
    /* Creamos boton */
    seccion[5].innerHTML = `<button id="volver">Volver</button>`

    /* Lo seleccionamos */
    let boton = document.getElementById("volver");

    /* Volvemos a estado anterior */
    boton.addEventListener("click", (e) => {
        e.preventDefault();
        section.forEach( s => s.classList.remove("hide"));
        seccion[5].innerHTML = `<button class="ganadores primero">Elegir 1° puesto</button>
                                <button class="ganadores segundo">Elegir 2° puesto</button>`
    });
};




// /* Validamos */
// if (e.path[2].classList.value.includes("p2")){
//     alert("Estas eligiendo segundo puesto!!");
// } else {
//     /* Ocultamos tarjetas */
//     section.forEach( s => s.classList.toggle("hide"));

//     /* Trabajamos con la tarjeta activa */
//     e.path[2].classList.remove("hide");
//     e.path[2].classList.toggle("p1");

//     /* Aviso para elegir pais */
//     puesto1.classList.toggle("hide");
//     puesto2.classList.add("hide");

//     /* Ocultamos link a fase final */
//     if (link.hidden){
//             link.hidden = false
//     } else link.hidden = true;