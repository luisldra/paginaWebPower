

window.onload = function () {
    // Variables
    const IMAGENES = [
        'Imagenes/ImgInstaPower/333414102_2562085533931338_2926266104848798452_n.jpg',
        'Imagenes/ImgInstaPower/324078815_561993665513593_7025106558794321492_n.jpg',
        'Imagenes/ImgInstaPower/333414102_2562085533931338_2926266104848798452_n.jpg',
        'Imagenes/ImgInstaPower/329123256_6542429472437264_5525060318983768341_n.jpg',
        'Imagenes/ImgInstaPower/333095924_3397719793829169_1365203021663684019_n.jpg'
    ];

    const VIDEOS = [
        'https://www.youtube.com/embed/XWA7NfxIRZo',
        'https://www.youtube.com/embed/h1miF-IfZ-w',
        'https://www.youtube.com/embed/zs16dQHmQsM',
        'https://www.youtube.com/embed/JSwu8PL-Z7s',
        'https://www.youtube.com/embed/JSwu8PL-Z7s',
        'https://www.youtube.com/embed/H8wTVY_Cbww'
    ]

    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');

    let posicionVideo = 0;
    let $botonRetrocederVideo = document.querySelector('#retrocederVideo')
    let $botonAvanzarVideo = document.querySelector('#avanzarVideo');

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        const img = document.getElementById('imagenIMG')

        img.src = `${IMAGENES[posicionActual]}`
        // $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    function ponerSrc() {
        const vIframe = document.getElementById('videoIframe');

        vIframe.src = `${VIDEOS[posicionVideo]}`;
    }

    /**
     * Funcion que cambia video en la siguiente posicion
     */
    function pasarVideo() {
        if(posicionVideo >= VIDEOS.length - 1) {
            posicionVideo = 0;
        } else {
            posicionVideo++;
        }
        ponerSrc();
    }

    /**
     * Funcion que cambia el video en la anterior posicion
     */
    function retrocederVideo() {
        if(posicionVideo <= 0) {
            posicionVideo = VIDEOS.length - 1;
        } else {
            posicionVideo--;
        }
        ponerSrc();
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

    $botonAvanzarVideo.addEventListener('click', pasarVideo);
    $botonRetrocederVideo.addEventListener('click', retrocederVideo);

    // Iniciar
    renderizarImagen();
    ponerSrc();
} 


