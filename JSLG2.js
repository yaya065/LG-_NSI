let title = document.getElementById("choix")
let valeursDesRoles = document.querySelectorAll(".roles .nbr .nbdej")
let nbjoueurs = localStorage.getItem("nombredejoueurs")

let vil = document.getElementById("vil")
let lg = document.getElementById("lg")
let sor = document.getElementById("sor")
let pf = document.getElementById("pf")
let cup = document.getElementById("cup")
let voy = document.getElementById("voy")

let nb_lg = {
  10: 3,
  11: 3,
  12: 4,
  13: 4,
  14: 5,
  15: 5,
  16: 6,
  17: 6,
  18: 6,
  19: 7,
  20: 7
}

lg.value = nb_lg[nbjoueurs]


function totalrole(){
  return sum(valeursDesRoles)
}

function sum(valeursDesRoles){
  let total = 0
  for(valeur of valeursDesRoles){
    if (!valeur.value) valeur.value = 0
    total += parseInt(valeur.value)
  }
  return total
}

let nbroles = sum(valeursDesRoles)
let nbrestant = nbjoueurs - nbroles

for(valeur of valeursDesRoles){
  valeur.addEventListener("input", function(){
    nbroles = sum(valeursDesRoles)
    nbrestant = nbjoueurs - nbroles
    if (nbrestant > 0){
      title.innerHTML = "Choix des rôles : " + nbrestant +" rôles restants à choisir "
      } 
    else if(nbrestant == 0){
      title.innerHTML = "La composition est prète !"
    }
    else{
      title.innerHTML = "Choix des rôles : " + -nbrestant +" rôles en trop "
    }
  })
}



function fabcompo() 
{
let compo = []
for (let i = 0; i <= vil.value; i++) {
  compo.push("V")
}
for (let i = 0; i <= lg.value; i++) {
  compo.push("L")
}
for (let i = 0; i <= sor.value; i++) {
  compo.push("S")
}
for (let i = 0; i <= pf.value; i++) {
  compo.push("P")
}
for (let i = 0; i <= cup.value; i++) {
  compo.push("C")
}
for (let i = 0; i <= voy.value; i++) {
  compo.push("O")
}
return compo
}

let composition = fabcompo()


function Jouer() {
  if (nbrestant == 0) {
    localStorage.setItem("compo", composition);
    window.location.href='LGNSI3.html';
  } 
  else {
    alert("Vous devez séléctionner autant de roles que de joueurs.");
  }
}
