
/* ----------------------------------------------- pour ouvrir/fermer le menu burger ------------------------------------------ */
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
    sidenav.classList.add("active");
    document.getElementById("sub-menu-school").style.display = "none";
    document.getElementById("sub-menu-aboutme").style.display = "none";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
sidenav.classList.remove("active");
}


/* ---------------------------------------------------- pour ouvrir les sous-menus --------------------------------------------------- */
var aboutme = document.getElementById("click_aboutme");
var school = document.getElementById("click_school");


aboutme.onclick = click_aboutme;
school.onclick = click_school;

function click_school(){
    if(document.getElementById("sub-menu-school").style.display == "none"){
        document.getElementById("sub-menu-school").style.display = "block";
    }
    else{
        document.getElementById("sub-menu-school").style.display = "none";
}
}

function click_aboutme(){
    if(document.getElementById("sub-menu-aboutme").style.display == "none"){
        document.getElementById("sub-menu-aboutme").style.display = "block";
    }
    else{
        document.getElementById("sub-menu-aboutme").style.display = "none";
    }
}



/* --------------------------------- Pour savoir quel nav on doit mettre en fonction de la taille de l'écran ---------------------------- */

var screenWidth = screen.width;
var screenHeight = screen.height;

var sidenav = document.getElementById("mySidenav");

function select_nav(){
    if(screenWidth >= 1025){
        document.getElementById("nav_tel_tablette").style.display = "none";
    }
    else{
        document.getElementById("nav_pc").style.display = "none";
    }
}
window.onload = select_nav();
