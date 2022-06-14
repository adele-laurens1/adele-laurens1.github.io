var slide = new Array("../../../pictures/caroussel/siteEchec/caroussel_siteEchec_1.webp", "../../../pictures/caroussel/siteEchec/caroussel_siteEchec_2.webp",
 "../../../pictures/caroussel/siteEchec/caroussel_siteEchec_3.webp", "../../../pictures/caroussel/siteEchec/caroussel_siteEchec_4.webp"
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