
var screenWidth = screen.width;
var screenHeight = screen.height;

function select_nav(){
    if(screenWidth >= 1600){
        document.getElementById("nav_tel_tablette").style.display = "none";
    }
    else{
        document.getElementById("nav_pc").style.display = "none";
    }
}
window.onload = select_nav();
