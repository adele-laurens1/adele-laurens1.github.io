var slide = new Array("/pictures/caroussel/siteGuitare/caroussel_siteGuitare_1.png", "/pictures/caroussel/siteGuitare/caroussel_siteGuitare_2.png",
 "/pictures/caroussel/siteGuitare/caroussel_siteGuitare_3.png", "/pictures/caroussel/siteGuitare/caroussel_siteGuitare_4.png",
 "/pictures/caroussel/siteGuitare/caroussel_siteGuitare_5.png", "/pictures/caroussel/siteGuitare/caroussel_siteGuitare_6.png",
 "/pictures/caroussel/siteGuitare/caroussel_siteGuitare_7.png", "/pictures/caroussel/siteGuitare/caroussel_siteGuitare_8.png",
 "/pictures/caroussel/siteGuitare/caroussel_siteGuitare_9.png"
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