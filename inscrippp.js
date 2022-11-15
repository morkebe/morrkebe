alert("inscription commence.....");

function valide(){
    var p=document.forms["inscription"]["prenom"].value;
    if(p==""){
        alert("vous dever saisir le Prenom");
        return false;
    }
    var p=document.forms["inscription"]["nom"].value;
    if(p==""){
        alert("vous dever saisir le Nom");
        return false;
    }
    var p=document.forms["inscription"]["lieu"].value;
    if(p==""){
        alert("vous dever saisir le Lieu de Naissance");
        return false;
    }
    var p=document.forms["inscription"]["date"].value;
    if(p==""){
        alert("vous dever saisir votre Date de Naissance");
        return false;
    }
    var prenom = document.querySelector("#prenom");
    var nom = document.querySelector("#nom");
    alert("bienvenue "+prenom.value+" "+nom.value+" "+"verifie votre email pour continuer votre inscription");
}