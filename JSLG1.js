function Jouer() {
  let nbjoueurs = document.getElementById("Nb").value;
  if ( 10 <= nbjoueurs && nbjoueurs <= 20) {
    localStorage.setItem("nombredejoueurs", nbjoueurs);
    window.location.href='LGNSI2.html';
  } 
  else {
    alert("Le nombre de joueurs doit être compris entre 10 et 20");
  }
}

