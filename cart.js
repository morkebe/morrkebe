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
    var p=document.forms["inscription"]["numero"].value;
    if(p==""){
        alert("vous dever saisir votre numero de dossier");
        return false;
    }
    var prenom = document.querySelector("#prenom");
    var nom = document.querySelector("#nom");
    alert("bienvenue "+prenom.value+" "+nom.value+" "+"votre carte d'etudiant n'est pas disponible pour le moment");
    }
  