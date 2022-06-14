var slide = new Array("../../../pictures/caroussel/siteGuitare/caroussel_siteGuitare_1.PNG", "../../../pictures/caroussel/siteGuitare/caroussel_siteGuitare_2.PNG",
 "../../../pictures/caroussel/siteGuitare/caroussel_siteGuitare_3.PNG", "../../../pictures/caroussel/siteGuitare/caroussel_siteGuitare_4.PNG",
 "../../../pictures/caroussel/siteGuitare/caroussel_siteGuitare_5.PNG", "../../../pictures/caroussel/siteGuitare/caroussel_siteGuitare_6.PNG",
 "../../../pictures/caroussel/siteGuitare/caroussel_siteGuitare_7.PNG", "../../../pictures/caroussel/siteGuitare/caroussel_siteGuitare_8.PNG",
 "../../../pictures/caroussel/siteGuitare/caroussel_siteGuitare_9.PNG"
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