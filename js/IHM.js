var slide = new Array("../../../pictures/caroussel/IHM/caroussel_IHM_1.PNG", "../../../pictures/caroussel/IHM/caroussel_IHM_2.PNG",
 "../../../pictures/caroussel/IHM/caroussel_IHM_3.PNG", "../../../pictures/caroussel/IHM/caroussel_IHM_4.PNG",
 "../../../pictures/caroussel/IHM/caroussel_IHM_5.PNG"
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