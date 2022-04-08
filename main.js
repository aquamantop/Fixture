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
const octavosPaises = [];



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
    second();

});

/* Logica para elegir primer puesto del grupo seleccionado */
function firts () {
    primeros.forEach( element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();   

            /* Validamos */
            if (e.path[2].classList.value.includes("p2")){
                alert("Estas eligiendo segundo puesto boludito");
            } else {
                /* Ocultamos tarjetas */
                section.forEach( s => s.classList.toggle("hide"));
    
                /* Trabajamos con la tarjeta activa */
                e.path[2].classList.remove("hide");
                e.path[2].classList.toggle("p1");

                /* Aviso para elegir pais */
                puesto1.classList.toggle("hide");
                puesto2.classList.add("hide");

                /* Ocultamos link a fase final */
                if (link.hidden){
                        link.hidden = false
                } else link.hidden = true;

                /* Marcamos pais elegido */
                paises.forEach( e => {
                    e.addEventListener("click", () => {
                        let a = e.innerHTML + "-grupoUno1";
                        octavosPaises.push(e.innerHTML);
                        console.log(octavosPaises);
                        console.log(a);
                        primeroDeGrupo(e.innerHTML);
                    });
                });
            };
        });
    });
};

function primeroDeGrupo (pais) {
    octavosFinal
    
}
console.log(octavosFinal);


/* Logica para elegir segundo puesto del grupo seleccionado */
function second () {
    segundos.forEach( element => {
        
        element.addEventListener("click", (e) => {
            e.preventDefault();       

            /* Validamos */
            if (e.path[2].classList.value.includes("p1")){
                alert("Estas eligiendo primer puesto boludito");
            } else {
                /* Ocultamos tarjetas */
                section.forEach( s => s.classList.toggle("hide"));

                /* Trabajamos con la tarjeta activa */
                e.path[2].classList.remove("hide");
                e.path[2].classList.toggle("p2");

                /* Aviso para elegir pais */
                puesto2.classList.toggle("hide");
                puesto1.classList.add("hide");

                /* Ocultamos link a fase final */
                if (link.hidden){
                        link.hidden = false
                } else link.hidden = true;

                /* Marcamos pais elegido */
                paises.forEach( e => {
                    
                });
            };
        });
    });
};




