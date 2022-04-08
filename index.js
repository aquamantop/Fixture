/* Elementos de index.html */
const primeros = document.querySelectorAll(".primero");
const segundos = document.querySelectorAll(".segundo");
const section = document.querySelectorAll("section");
const puesto1 = document.getElementById("puesto1");
const puesto2 = document.getElementById("puesto2");
const paises = document.querySelectorAll(".pais")



/* Empezamos el listener */
window.addEventListener("load", () => {

    firts();

    second();

});

function firts () {
    primeros.forEach( element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();   

            /* Validamos */
            if (e.path[2].classList.value.includes("p2")){
                console.log("elegi bien pelotudo");
            } else {
                /* ocultar tarjetas */
                section.forEach( s => s.classList.toggle("hide"))
    
                /* trabajamos con la tarjeta activa */
                e.path[2].classList.remove("hide")
                e.path[2].classList.toggle("p1")

                /* Aviso para elegir pais */
                puesto1.classList.toggle("hide")
                puesto2.classList.add("hide")

                /* Marcamos pais elegido */
                paises.forEach( e => {

                });
            };
        });
    });
};

function second () {
segundos.forEach( element => {
        
        element.addEventListener("click", (e) => {
            e.preventDefault();       

            /* Validamos */
            if (e.path[2].classList.value.includes("p1")){
                console.log("elegi bien pelotudo");
            } else {
                /* ocultar tarjetas */
                section.forEach( s => s.classList.toggle("hide"))

                /* trabajamos con la tarjeta activa */
                e.path[2].classList.remove("hide")
                e.path[2].classList.toggle("p2")

                /* Aviso para elegir pais */
                puesto2.classList.toggle("hide")
                puesto1.classList.add("hide")

                /* Marcamos pais elegido */
                paises.forEach( e => {
                    
                });
            };
        });
    });
};


/* Elementos de sig-fase.html */
const octavos = []

