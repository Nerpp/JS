// Crée fonction

/**
 * cette fonction dit bonjour dans la console 
 * les params sont des indications
 * @param {string} prenom de la personne
 * @param {string} nom de la personne
 */
function direBonjour(prenom,nom) {
    prenom = prompt("Votre prenom");
    nom = prompt("Votre nom");
    console.log(`Salut ${prenom} ${nom}`);
}

direBonjour();