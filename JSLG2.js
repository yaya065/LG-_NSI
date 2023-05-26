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
    title.innerHTML = "Choix des rôles : " + nbrestant +" rôles restants à choisir "
    nbroles = sum(valeursDesRoles)
    console.log("b")
  })
}



function fabcompo() 
{
let compo = []
for (let i = 0; i <= vil.value; i++) {
  compo.push("Vil")
}
for (let i = 0; i <= lg.value; i++) {
  compo.push("lg")
}
for (let i = 0; i <= vil.value; i++) {
  compo.push("sor")
}
for (let i = 0; i <= vil.value; i++) {
  compo.push("pf")
}
for (let i = 0; i <= vil.value; i++) {
  compo.push("cup")
}
for (let i = 0; i <= vil.value; i++) {
  compo.push("voy")
}
return compo
}
console.log(fabcompo())