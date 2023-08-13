const poker = document.getElementById("poker");
// LE POINTAGES DES BOUTONS DU DISTRIBUTEUR DEBUT <---
const btnCoca = document.getElementById("coca");
const btnFanta = document.getElementById("fanta");
const btnSprite = document.getElementById("sprite");
const btnPepsi = document.getElementById("pepsi");
const btnNestea = document.getElementById("nestea");
const btnCocaZero = document.getElementById("coca0");
// LE POINTAGES DES BOUTONS DU DISTRIBUTEUR FIN --->

// -----------------------------------------------------
// LE POINTAGE POUR L AFFICHAGE DEBUT <---
const affichageElement = document.querySelector(".affichage");
const titreSoda = document.querySelector(".affichage h2");
const imageSoda = document.querySelector(".affichage img");
const prixSoda = document.getElementById("prix");
const quantiteSoda = document.getElementById("quantite");
const etatDeStock = document.getElementById("stock");
const descriptionSoda = document.getElementById("description");
// LE POINTAGE POUR L AFFICHAGE FIN --->
// LA LIAISON DANS LE DOM POUR LES ELEMENT DE LA CLASSE AFFICHAGE DEBUT <---
affichageElement.appendChild(titreSoda);
affichageElement.appendChild(prixSoda);
affichageElement.appendChild(quantiteSoda);
affichageElement.appendChild(etatDeStock);
affichageElement.appendChild(descriptionSoda);
// LA LIAISON DANS LE DOM POUR LES ELEMENT DE LA CLASSE AFFICHAGE FIN --->
// -----------------------------------------------------
// -----------------------------------------------------
// POINTER LES CANETTES DEBUT --->
const canetteCoca = document.getElementById("canetteCoca");

// POINTER LES CANETTES FIN <---
// -----------------------------------------------------
// CREE DES ELEMENT DU DOM  DEBUT <---
// POITER LES ELEMENT DE LA CLASSE presentation DEBUT <---
const presentationElement = document.querySelector(".presentation");
// POITER LES ELEMENT DE LA CLASSE presentation FIN --->
const titrePresentation = document.createElement("h2");
const descriptionPresentation = document.createElement("p");
// CREE DES ELEMENT DU DOM  FIN --->
// LIAISONS DES ELEMENTS DU DOM POUR LA SECTION PRESENTATION DEBUT <---
presentationElement.appendChild(titrePresentation);
presentationElement.appendChild(descriptionPresentation);
// LIAISONS DES ELEMENTS DU DOM POUR LA SECTION PRESENTATION FIN --->
// LIAISONS DES ELEMENT DU DOM POUR MES SIGNAUX DE STOCK DEBUT <---
const stockCoca = document.getElementById("stockcoca");
const stockFanta = document.getElementById("stockfanta");
const stockSprite = document.getElementById("stocksprite");
const stockPepsi = document.getElementById("stockpepsi");
const stockNestea = document.getElementById("stocknestea");
const stockCoca0 = document.getElementById("stockcoca0");
// LIAISONS DES ELEMENT DU DOM POUR MES SIGNAUX DE STOCK FIN --->
// INJECTER DU TEXTE DEBUT <---
titrePresentation.innerHTML = "Le projet du distributeur";

let descriptionParagraphe = `<p>Se projet a ete realiser avec du js html et css </p>
<p>L intention est dimité un distributeur a boisson</p>
<p>Egalement de jouer avec le dom</p>`;
descriptionPresentation.innerHTML = descriptionParagraphe;

// INJECTER DU TEXTE FIN --->

// EVENEMENT AU CLICK SUR LES BOUTONS DU DISTRIBUTEUR DEBUT <---
// SOND
const audio = new Audio();
// SOND

// ________________________________________________________________________________________________
btnCoca.addEventListener("click", () => {
  distributeur[0].stock = Distribution(distributeur[0].stock);

  AfficheInfo(
    distributeur[0].nom,
    distributeur[0].prix,
    distributeur[0].stock,
    distributeur[0].disponibilite,
    distributeur[0].description
  );
  if (distributeur[0].stock === 0) {
    distributeur[0].disponibilite = false;
    btnCoca.disabled = true;
    stockCoca.classList.add("signalfalse");
  }
  if (distributeur[0].stock > -1) {
    canetteCoca.classList.add("tomber");
    console.log(distributeur[0].stock);
    EmpecherPrendrePlusieurCanette(
      btnCoca,
      btnFanta,
      btnSprite,
      btnPepsi,
      btnNestea,
      btnCocaZero
    );
  }
});

const sond = document.getElementById("sond");
canetteCoca.addEventListener("click", () => {
  audio.src = "./sond/CanetteRototo.mp3";
  audio.play();

  ReactiverChoix(
    btnCoca,
    btnFanta,
    btnSprite,
    btnPepsi,
    btnNestea,
    btnCocaZero
  );
  canetteCoca.classList.add("visible");
  canetteCoca.classList.remove("tomber");
  canetteCoca.classList.remove("visible");
});

// =================================>
// _____________________________________________________________________________________________
btnFanta.addEventListener("click", () => {
  distributeur[1].stock = Distribution(distributeur[1].stock);
  poker.classList.add("actifPoker");

  AfficheInfo(
    distributeur[1].nom,
    distributeur[1].prix,
    distributeur[1].stock,
    distributeur[1].disponibilite,
    distributeur[1].description
  );
  if (distributeur[1].stock === 0) {
    distributeur[1].disponibilite = false;
    btnFanta.disabled = true;
    stockFanta.classList.add("signalfalse");
  }
  if (distributeur[1].stock > -1) {
    canetteFanta.classList.add("tomber");

    EmpecherPrendrePlusieurCanette(
      btnCoca,
      btnFanta,
      btnSprite,
      btnPepsi,
      btnNestea,
      btnCocaZero
    );
  }
});
canetteFanta.addEventListener("click", () => {
  audio.src = "./sond/CanetteRototo.mp3";
  audio.play();

  ReactiverChoix(
    btnCoca,
    btnFanta,
    btnSprite,
    btnPepsi,
    btnNestea,
    btnCocaZero
  );
  canetteFanta.classList.add("visible");
  canetteFanta.classList.remove("tomber");
  canetteFanta.classList.remove("visible");
});

btnSprite.addEventListener("click", () => {
  distributeur[2].stock = Distribution(distributeur[2].stock);

  AfficheInfo(
    distributeur[2].nom,
    distributeur[2].prix,
    distributeur[2].stock,
    distributeur[2].disponibilite,
    distributeur[2].description
  );
  if (distributeur[2].stock === 0) {
    distributeur[2].disponibilite = false;
    btnSprite.disabled = true;
    stockSprite.classList.add("signalfalse");
  }
  if (distributeur[2].stock > -1) {
    canetteSprite.classList.add("tomber");

    EmpecherPrendrePlusieurCanette(
      btnCoca,
      btnFanta,
      btnSprite,
      btnPepsi,
      btnNestea,
      btnCocaZero
    );
  }
});
canetteSprite.addEventListener("click", () => {
  audio.src = "./sond/CanetteRototo.mp3";
  audio.play();

  ReactiverChoix(
    btnCoca,
    btnFanta,
    btnSprite,
    btnPepsi,
    btnNestea,
    btnCocaZero
  );
  canetteSprite.classList.add("visible");
  canetteSprite.classList.remove("tomber");
  canetteSprite.classList.remove("visible");
});

// ________________________________________________________________________________
btnPepsi.addEventListener("click", () => {
  distributeur[3].stock = Distribution(distributeur[3].stock);

  AfficheInfo(
    distributeur[3].nom,
    distributeur[3].prix,
    distributeur[3].stock,
    distributeur[3].disponibilite,
    distributeur[3].description
  );
  if (distributeur[3].stock === 0) {
    distributeur[3].disponibilite = false;
    btnPepsi.disabled = true;
    stockPepsi.classList.add("signalfalse");
  }
  if (distributeur[3].stock > -1) {
    canettePepsi.classList.add("tomber");

    EmpecherPrendrePlusieurCanette(
      btnCoca,
      btnFanta,
      btnSprite,
      btnPepsi,
      btnNestea,
      btnCocaZero
    );
  }
});
canettePepsi.addEventListener("click", () => {
  audio.src = "./sond/CanetteRototo.mp3";
  audio.play();

  ReactiverChoix(
    btnCoca,
    btnFanta,
    btnSprite,
    btnPepsi,
    btnNestea,
    btnCocaZero
  );
  canettePepsi.classList.add("visible");
  canettePepsi.classList.remove("tomber");
  canettePepsi.classList.remove("visible");
});
btnNestea.addEventListener("click", () => {
  distributeur[4].stock = Distribution(distributeur[4].stock);

  AfficheInfo(
    distributeur[4].nom,
    distributeur[4].prix,
    distributeur[4].stock,
    distributeur[4].disponibilite,
    distributeur[4].description
  );
  if (distributeur[4].stock === 0) {
    distributeur[4].disponibilite = false;
    btnNestea.disabled = true;
    stockNestea.classList.add("signalfalse");
  }
  if (distributeur[4].stock > -1) {
    canetteNestea.classList.add("tomber");

    EmpecherPrendrePlusieurCanette(
      btnCoca,
      btnFanta,
      btnSprite,
      btnPepsi,
      btnNestea,
      btnCocaZero
    );
  }
});
canetteNestea.addEventListener("click", () => {
  audio.src = "./sond/CanetteRototo.mp3";
  audio.play();
  ReactiverChoix(
    btnCoca,
    btnFanta,
    btnSprite,
    btnPepsi,
    btnNestea,
    btnCocaZero
  );
  canetteNestea.classList.add("visible");
  canetteNestea.classList.remove("tomber");
  canetteNestea.classList.remove("visible");
});
btnCocaZero.addEventListener("click", () => {
  distributeur[5].stock = Distribution(distributeur[5].stock);

  AfficheInfo(
    distributeur[5].nom,
    distributeur[5].prix,
    distributeur[5].stock,
    distributeur[5].disponibilite,
    distributeur[5].description
  );
  if (distributeur[5].stock === 0) {
    distributeur[5].disponibilite = false;
    btnCocaZero.disabled = true;
    stockCoca0.classList.add("signalfalse");
  }
  if (distributeur[5].stock > -1) {
    canetteCocaZero.classList.add("tomber");

    EmpecherPrendrePlusieurCanette(
      btnCoca,
      btnFanta,
      btnSprite,
      btnPepsi,
      btnNestea,
      btnCocaZero
    );
  }
});
canetteCocaZero.addEventListener("click", () => {
  audio.src = "./sond/CanetteRototo.mp3";
  audio.play();
  ReactiverChoix(
    btnCoca,
    btnFanta,
    btnSprite,
    btnPepsi,
    btnNestea,
    btnCocaZero
  );
  canetteCocaZero.classList.add("visible");
  canetteCocaZero.classList.remove("tomber");
  canetteCocaZero.classList.remove("visible");
});
// EVENEMENT AU CLICK SUR LES BOUTONS DU DISTRIBUTEUR FIN --->
// -----------------------------------------------------
// EVENEMENT AU CLICK POUR LES CANETTE DEBUT --->
// EVENEMENT AU CLICK POUR LES CANETTE FIN <---
