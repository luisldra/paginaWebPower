

window.onload = function () {
    // Variables
    const IMAGENES = [
        "Imagenes/ImgInstaPower/319934676_542187067808155_5506817459036680837_n.jpg",
        "Imagenes/ImgInstaPower/320220729_1206043266648287_1621202290998862137_n.jpg",
        "Imagenes/ImgInstaPower/320276513_474138844857729_4148599765787087094_n.jpg",
        "Imagenes/ImgInstaPower/324061092_695474215250908_5221725950839615066_n.jpg",
        "Imagenes/ImgInstaPower/324223061_844117893335484_2717423714343401341_n.jpg",
        "Imagenes/ImgInstaPower/324557060_195437269733201_6387825662544903036_n.jpg",
        "Imagenes/ImgInstaPower/324912791_1027607081529640_7121042080040324101_n.jpg",
        "Imagenes/ImgInstaPower/333095924_3397719793829169_1365203021663684019_n.jpg",
        "Imagenes/ImgInstaPower/330241979_899960794478924_8453570458333450769_n.jpg"
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


