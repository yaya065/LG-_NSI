let nbjoueurs = localStorage.getItem("nombredejoueurs")
let compo = localStorage.getItem("compo") 
let image = document.getElementById("image0");
let bouton = document.getElementById("suivant");
console.log(compo)
    
function  compoaffichage() {
    let i = 0
        if(compo[i] == "V"){
            image.setAttribute("src", "images/villageois.jpg"); 
        }
        else if(compo[i] == "L"){
            image.setAttribute("src", "images/lg.jpg"); 
        }
        else if(compo[i] == "sor"){
            image.setAttribute("S", "images/sorcière.jpg"); 
        }
        else if(compo[i] == "P"){
            image.setAttribute("src", "images/pf.jpg"); 
        }
        else if(compo[i] == "C"){
            image.setAttribute("src", "images/cup.jpg"); 
        }
        else if(compo[i] == "O"){
            image.setAttribute("src", "images/voyante.jpg"); 
        }
        else{
        }
        alert("Appellez le joueur suivant pour qu'il reçoive son rôle ...");
        if (i<nbj)

    }
    
} 