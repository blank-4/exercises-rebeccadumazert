/* Créer deux fonctions qui prennent un paramètre de type nombre.

La première fonction doit :
* Additionner tous les nombres entre 0 et le paramètre.
* Retourner la valeur de la somme finale.

La seconde fonction doit faire exactement pareil mais utiliser le principe de récursivité.
 */

 function addit(nombre) {
    var res = 0;
    for ( var i = 0; i <= nombre; i++ ) {
        res = res + i;
    } 
    return res;
 }
 console.log(addit(5));

 //recursivité

function addR(number) {
    if (number ==0) return 0;
    return addR(number - 1) + number;
}

// recursivité puissance 


console.log(addR(4));

function puissanceR(number) {
    if (puissanc == 0) return 1;
    return puissanceR(number, puissance - 1) * number;
}