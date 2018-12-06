/* ### CHIFFREMENT DE CÉSAR

* Avant tout, aller regarder ce qu'est le chiffre de César, ou chiffrement par décallage : [https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage](https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage)

* Créer une fonction `chiffrer`. Elle prendra deux paramètres,  le premier est une String qui sera la phrase à encoder. Le second est le décalage pour le code de César :
  * Cette fonction doit encoder le message et retourner le message encodé.
  * Pour vous aider: voici l'alphabet sous forme de tableau :
  ```js
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  ```
* Créer une fonction `dechiffrer` qui prendra les deux mêmes paramètres que la fonction chiffrer.
  * Cette fonction doit déchiffrer le message passé en paramètre avec la clé, elle aussi passée en paramètre.
  * 
  
* Bonus : le programme doit laisser tel quel les charactères non présents dans l'alphabet.
 */

    function chiffrer(str, key) {
      var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      var res = "";
      // pour régler le problème des majuscules !! on met la string en minuscule quoi quil arrive >>
      str = str.toLowerCase();
      for (var i = 0 ; i < str.length; i++) {
         // recuperer l'index de la lettre
         var lettre = str[i];
         console.log("pour la lettre " + lettre);
         var index = alphabet.indexOf(lettre);
         //si index est supérieur à -1 on encode 
         if (index > -1) {
         // décaler l'index de "key" pour avoir une nouvelle lettre
         index = index + (key % alphabet.length) + alphabet.length;
         console.log("l'index initial est : " + index)
         // trouver la lettre qui est située au nouvel index
         var nouvelleLettre = alphabet[index % alphabet.length];
         console.log("la nouvelle lettre est : " + nouvelleLettre);
         // ajout de la nouvelle lettre à la fin du résultat 
         res = res + nouvelleLettre; 
      } else {
         // je rajoute ma lettre non chiffrée
         res = res + lettre;
      }
   }
   return res;
 }

 function dechiffrer(str, key) {
    return chiffrer(str, -key);
 }
  // doit encode bienenue
 console.log(chiffrer("bienenue", 5));

 //doit encoder bienenue avec une majuscule
 console.log(chiffrer("Bienenue", 5)); 
 
 //doit encoder bienenue avec les caracteres speciaux
   console.log(chiffrer("Bienenue, =+))", 5)); 

// doit encore avec une très grande clé 
console.log(chiffrer("Bienenue))", 342526));

// doit encoder avec une clé négative
console.log(chiffrer("Bienenue))", -34));