//L'operateur de décomposition

const nombre = [5,15,21];

function addition(nb1,nb2,nb3)
{
    return nb1 + nb2 + nb3;
}

let resultat = addition(...nombre);

console.log(resultat);

console.log(...nombre);

const tableauDate = [2022,08,14];
let maDate = new Date(...tableauDate);

console.log(maDate)

const autreTableau = [2,23,...nombre];
console.table(autreTableau);


const t1 = ["a","b","c"];
const t2 = ["d","e","f"];
const t3 = [...t1,...t2];

console.table(t3);

// avec des objets
const nom = {
    nom:"Regi"
}

const prenom = {
    prenom:"Aurelien"
}
const profil = {...nom,...prenom}

console.log(profil)