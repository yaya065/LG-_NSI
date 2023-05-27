let nbjoueurs = localStorage.getItem("nombredejoueurs")
// "compo" qui était une liste a été envoyée par JS comme une string qui contient tous
// les éléments, séparés par des virgules d'où le split
let composition = localStorage.getItem("compo").split(',')
let image = document.getElementById("image0")
let bouton = document.getElementById("suivant")

console.log(composition)

function compoaffichage() {
    for (let i = 0; i < composition.length; i++) {
        console.log(i + " => " + composition[i])
        image.setAttribute("src", "images/"+composition[i]+".jpg")
        alert("Appellez le joueur suivant pour qu'il reçoive son rôle ...")
    }
}
//Par manque de temps je n'ai pas pu fabriquer de fonction qui mélange aléatoirement compo mais dans l'absolu il en faudrait.