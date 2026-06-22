function mostrar(id, elemento){

    const categorias = document.querySelectorAll('.grid-modelos');

    categorias.forEach(categoria => {
        categoria.style.display = 'none';
    });

    document.getElementById(id).style.display = 'grid';

    const opciones = document.querySelectorAll('.menu-modelos li');

    opciones.forEach(opcion => {
        opcion.classList.remove('activo');
    });

    elemento.classList.add('activo');
}

window.onload = function(){

    document.getElementById('refrigeracion').style.display = 'grid';

    document.querySelectorAll('.menu-modelos li')[1]
        .classList.add('activo');
};