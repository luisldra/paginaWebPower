
function mostrarNavegacion() {
    const estado = document.getElementById('navegacion').style.display
    console.log(estado)
    if (estado == 'block') {
        document.getElementById('navegacion').style.display = 'none'      
    }else{
        document.getElementById('navegacion').style.display = 'block'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navegacion = document.getElementById('btnNavegacion');
    navegacion.addEventListener('click', mostrarNavegacion);

})