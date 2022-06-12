var slide = new Array("../../../pictures/caroussel_IHM_1.webp", "../../../pictures/caroussel_IHM_2.webp",
 "../../../pictures/caroussel_IHM_3.webp", "../../../pictures/caroussel_IHM_4.webp",
 "../../../pictures/caroussel_IHM_5.webp"
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