// Comment manipuler le dom

// ecriture alternative pour etre sur que le dom soit chargé moins bonne pratique
// window.onload = () => {

// }

// https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/onDOMContentLoaded
// Une vérification pour être sur que mon dom est chargé Bonne pratique 

// pour faire une fonction qui va utilisé ce quee l'on a selectionné on ecrit , () =>{ }

window.addEventListener("DOMContentLoaded",()=>{
    // ici on certain que le dom est chargé

    // Aller chercher un/des éléments dans le document

let baliseH2 = document.querySelectorAll("h2");

console.log(baliseH2);

// récupérer un seul élément
// je récupére le deuxieme li grace a nth-child
let baliseLi = document.querySelector("li:nth-child(0)");
console.log(baliseLi);


// je récupére du css
let baliseRow = document.querySelectorAll(".row");
console.log(baliseRow);

let baliseid = document.querySelector("#titre1");
console.log(baliseid);


for(let row of baliseRow){
    row.style.color ="purple";
}

// Les evenements
// https://developer.mozilla.org/fr/docs/Web/Events

// on ecoute les clics pour chaques balises balise h2

for(let balise of baliseH2){
    
    balise.addEventListener("click",changeCouleur);
        
}

let baliseP = document.querySelector("#titre2 + p");
baliseP.previousElementSibling.innerText = "texte modifié";


let dernierLi = document.querySelector("li:last-child")
dernierLi.style.color = "blue";

// déclarer les dates
// on peut utiliser le format ISO
let dateActuelle = new Date();
let anniversaire = new Date("1980-12-30")

// dans un jour il y a 24h * 60 min * 60 sec * 1000 mls = 86400000 ms
const mlsJour = 86400000;

let temps = dateActuelle - anniversaire;

// j'arrondi avec Math.floor
let joursVecu = Math.floor(temps / mlsJour);

console.log("Vous avez vecu " + joursVecu + " jours");




// fin du chargement du dom
}) 

// je peu les déclarer ou je veu
function changeCouleur()
{
    this.style.color = "green";

}