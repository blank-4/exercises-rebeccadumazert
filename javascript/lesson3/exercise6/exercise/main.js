/* Créer une fonction qui calcule la puissance d'un nombre :
* Elle prend deux paramètre :
  * Un nombre
  * La puissance souhaitée
* Elle retourne le nombre à la puissance que vous vouliez.
 */

 function puissance1(nombre, puissance) {
     var res = 1 ; 
     for ( var i = 0 ; i < puissance ; i++) {
        res = res * nombre; 
     }
     return res;
 }
 console.log(puissance1(10, 6));