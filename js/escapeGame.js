var slide = new Array("../../../pictures/caroussel/escapeGame/caroussel_escapeGame_1.png", "../../../pictures/caroussel/escapeGame/caroussel_escapeGame_2.png",
 "../../../pictures/caroussel/escapeGame/caroussel_escapeGame_3.png", "../../../pictures/caroussel/escapeGame/caroussel_escapeGame_4.png",
 "../../../pictures/caroussel/escapeGame/caroussel_escapeGame_5.png", "../../../pictures/caroussel/escapeGame/caroussel_escapeGame_6.png",
 "../../../pictures/caroussel/escapeGame/caroussel_escapeGame_7.png", "../../../pictures/caroussel/escapeGame/caroussel_escapeGame_8.png",
 "../../../pictures/caroussel/escapeGame/caroussel_escapeGame_9.png", "../../../pictures/caroussel/escapeGame/caroussel_escapeGame_10.png"
 );
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}