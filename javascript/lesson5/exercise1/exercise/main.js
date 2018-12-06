/* Amusons un peu avec le DOM !

* Créez une page html contenant une balise "p" vide ayant pour id "texte".
le "p" devra être en display none .

* Avec "innerHTML" ajouter du lorem ipsum dans "texte".

* Créez une fonction "afficher" qui, lorsqu'elle est appelé affiche le texte en changeant son display.

* Ajouter un bouton au dessus du "p" qui lorsque l'on cliquera dessus appellera la fonction "afficher".

* Créez un second bouton qui lorsque l'on cliquera dessus masquera le texte.

* Créez une fonction qui changera la couleur du texte de manière aléatoire et l'affichera dans la console. Enfin exécutez la.
 */

 var texte = document.getElementById("texte");

 texte.innerHTML = "lorem";

 function afficher() {
         texte.style.display = "block";
 }

 function cacher() {
     texte.style.display = "none";
 }

 function color() {
    var color = ["red","yellow","black","green","blue"];
    document.getElementById('texte').style.color =  color[Math.floor(Math.random()*5)]
 }
