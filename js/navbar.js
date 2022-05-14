function menuDeroulant(id)
{
    
    if(id == 'aboutMe'){
        var etat = document.getElementById("portrait").style.display;
        if(etat == 'none'){
            document.getElementById("portrait").style.display = 'block';
            document.getElementById("competences").style.display = 'block';
            document.getElementById("musique").style.display = 'block';
        }
        else{
            document.getElementById("portrait").style.display = 'none';
            document.getElementById("competences").style.display = 'none';
            document.getElementById("musique").style.display = 'none';
        }
    }
    else{
        var etat = document.getElementById("parcours").style.display;
        if(etat == 'none'){
            document.getElementById("parcours").style.display = 'block';
            document.getElementById("projet").style.display = 'block';
        }
        else{
            document.getElementById("parcours").style.display = 'none';
            document.getElementById("projet").style.display = 'none';
        }
    }
}
