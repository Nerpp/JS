// interaction utilisateur

// alert("Message alert JS");
// prompt("Quel nombre");
// confirm("Etes vous sur de confirmer");

// On crée la variable nombre et on lui met la valeur 3
// crée depuis 2015, la différence avec var est que let va disparaitre de la mémoire plus rapidement donc sera plus léger
// var autreNombre = 2;

let nombre1 = 3;

let nombre2 = 25;

// OPeration de base +,-,*,/,%
let nombre = nombre1 + nombre2;

nombre = nombre1 - nombre2;

nombre = nombre1 % nombre2;

nombre *= 4;
nombre /= 2;
// Ecrire dans la console

console.log(nombre);


let texte = "Bonjour";
let texte2 = " à toi";

// pour assembler du texte pas de . en javascript
let phrase = texte + texte2;

// nouvelle concaténation
let phrase2 = `Bonjour${texte2} `;

console.log(phrase2);

// -1 de index of veut dire pas trouver
console.log(phrase2.indexOf("toi"));

// selectionner des caracteres à partir, jusqu'a 
console.log(phrase2.slice(8))

// changer un caractere
console.log(phrase2.replace("toi","Aurelien"))

let tableau = [10,"brouette",true,10.25,false];

tableau.reverse();

// Ajouter au debut
tableau.unshift("Bonjour","Aurelien");

// Retirer une valeur 
// la premiere
tableau.shift();

// la derniere
tableau.pop();

// Ajouter à la fin
tableau.push("aurevoir","Aurelien");

// Modifier des valeurs
tableau.splice(2,0,"Insérer")

console.table(tableau)

console.log(tableau[2])

let pass ;
while (pass != "g") {
    pass = prompt("mot de passe");
    console.log("mot de passe ok, voila la liste des clients")
}

// le script continue apres le while une fois le mdp rentré

let clients = ["marc","junior","clothilde","guenievre"];

clients.forEach((value,index)=>{
    console.log(value,index)
})