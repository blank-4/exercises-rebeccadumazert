/* * Créez une html dont le body sera vide .

* Dans votre script créez une fonction qui, elle contiendra le code pour les consignes suivantes :

* Créer une div .

* Attribuez lui une taille et une background-color avec JS.

* Lorsque l'on passe la souris sur la div elle devra changer de couleur de fond .
 */

 function creat() {
    var newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    newDiv.style.backgroundColor="blue";
    newDiv.style.height="200px";
    newDiv.style.width="150px";
    newDiv.onmouseover = function () {
        newDiv.style.backgroundColor = "yellow";
    }
    newDiv.onmouseout = function () {
        newDiv.style.backgroundColor = "blue";
    }
 }

 creat();