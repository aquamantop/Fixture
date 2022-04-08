/* Elementos de index.html */
const primeros = document.querySelectorAll(".primero");
const segundos = document.querySelectorAll(".segundo");
const section = document.querySelectorAll("section");
const puesto1 = document.getElementById("puesto1");
const puesto2 = document.getElementById("puesto2");
const paises = document.querySelectorAll(".pais");
const link = document.querySelectorAll("a")

console.log(paises[0].innerHTML);
console.log(link);

/* Empezamos el listener */
window.addEventListener("load", () => {

    firts();

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
                    e.addEventListener("click", () => {
                        let a = e.innerHTML + "-grupoUno1";
                        octavos.push(e.innerHTML)
                        console.log(octavos);
                        console.log(a);
                    });
                });
            };
        });
    });
};

/* Logica para elegir segundo puesto del grupo seleccionado */
function second () {
    segundos.forEach( element => {
        
        element.addEventListener("click", (e) => {
            e.preventDefault();       

            /* Validamos */
            if (e.path[2].classList.value.includes("p1")){
                alert("Estas eligiendo primer puesto boludito");
            } else {
                /* ocultar tarjetas */
                section.forEach( s => s.classList.toggle("hide"))

                /* trabajamos con la tarjeta activa */
                e.path[2].classList.remove("hide")
                e.path[2].classList.toggle("p2")

                /* Aviso para elegir pais */
                puesto2.classList.toggle("hide")
                puesto1.classList.add("hide")

                /* Ocultamos link a fase final */
                link.forEach(e => {

                });

                /* Marcamos pais elegido */
                paises.forEach( e => {
                    
                });
            };
        });
    });
};


/* Elementos de sig-fase.html */
const octavos = []

