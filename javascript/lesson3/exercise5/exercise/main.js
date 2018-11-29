/* Créer une fonciton qui calcule l'aire d'un cercle :
* Cette fonction prend en paramètre le rayon de ce dernier
* Elle retourne l'aire du cercle

Créer une deuxième fonciton qui calcule le périmètre d'un cercle :
* Elle prend en paramètre le rayon du cercle
* Elle retourne le périmètre

Créer une fonction qui calcule le diamètre d'un cercle :
* Elle prend en paramètre le rayon d'un cercle
* Elle retourne le diamètre
 */

 function cercle(rayonducercle) {
    var res= Math.PI*(rayonducercle*rayonducercle);
    return res;
 } 
 console.log(cercle(12.5));

 function pcercle(rayoncercle) {
    return 2*Math.PI*rayoncercle; 
}
console.log(pcercle(4.2));

function cercle3 (raycercle) {
    return (raycercle*2);
}
console.log(cercle3(4));