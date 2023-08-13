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
