// la fonction qui affichera toutes les infos dans le dom
function AfficheInfo(
  titreSodap,
  prixSodap,
  quantiteSodap,
  etatDeStockp,
  descriptionSodap
) {
  titreSoda.innerHTML = ` ${titreSodap}`;

  prixSoda.innerHTML = `Le prix:${prixSodap}€`;

  quantiteSoda.innerHTML = `Quantitée disponible: ${quantiteSodap}`;
  if (quantiteSodap === undefined) {
    quantiteSoda.innerHTML = "Quantitée disponible: 0";
  }
  if (quantiteSodap < 1) {
    etatDeStockp = false;
    etatDeStock.innerHTML = "";
    etatDeStock.innerHTML = "Etat de stock: EN RUPTURE";
  }
  console.log(quantiteSodap);
  if (etatDeStockp === true) {
    etatDeStock.innerHTML = "Etat de stock: EN STOCK";
  }

  descriptionSoda.innerHTML = `Description du produit: ${descriptionSodap}`;
}

// la fonction qui permet de retirer du stock
function Distribution(stock) {
  if (stock > 0) {
    stock--;
    return stock;
  }
}
// CREE UNE FONCTION QUI DONNE L HEURE
// CREE UN CALENDRIER
// EMPECHER DE PRENDRE PLUS DE 2 CANETTE A LA FOIS DEBUT --->
function EmpecherPrendrePlusieurCanette(btn1, btn2, btn3, btn4, btn5, btn6) {
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
  btn4.disabled = true;
  btn5.disabled = true;
  btn6.disabled = true;
}

// EMPECHER DE PRENDRE PLUS DE 2 CANETTE A LA FOIS FIN <---
// REACTIVER LE CHOIX DES BOISSONS DEBUT --->
function ReactiverChoix(btn1, btn2, btn3, btn4, btn5, btn6) {
  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
  btn4.disabled = false;
  btn5.disabled = false;
  btn6.disabled = false;
}
// REACTIVER LE CHOIX DES BOISSONS FIN <---
