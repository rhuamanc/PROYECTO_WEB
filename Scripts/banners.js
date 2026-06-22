const imagenes = [
    "../images/Banner_1.webp",
    "../images/Banner_2.gif",
    "../images/Banner_3.webp",
    "../images/Banner_4.webp"
];

let actual = 0;

function actualizarIndicadores() {
    const puntos = document.querySelectorAll(".indicadores span");

    puntos.forEach(punto => {
        punto.classList.remove("activo");
    });

    puntos[actual].classList.add("activo");
}

function cambiarImagen(indice) {
    actual = indice;

    document.getElementById("banner").src = imagenes[actual];

    actualizarIndicadores();
}

setInterval(() => {
    actual++;

    if (actual >= imagenes.length) {
        actual = 0;
    }

    document.getElementById("banner").src = imagenes[actual];

    actualizarIndicadores();

}, 6000);