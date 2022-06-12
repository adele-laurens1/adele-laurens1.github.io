var slide = new Array("../../../pictures/projetS3_escapeGame_miniature.webp", "../../../pictures/caroussel_projetS3_2.webp",
 "../../../pictures/caroussel_projetS3_3.webp", "../../../pictures/caroussel_projetS3_4.webp",
 "../../../pictures/caroussel_projetS3_5.webp", "../../../pictures/caroussel_projetS3_6.webp",
 "../../../pictures/caroussel_projetS3_7.webp", "../../../pictures/caroussel_projetS3_8.webp",
 "../../../pictures/caroussel_projetS3_9.webp", "../../../pictures/caroussel_projetS3_10.webp"
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