/* * créer une page html contenant un lien qui va vers la page print "print" .

* le but n'est pas d'aller sur la page print mais lorsque l'on clique sur le liens cela doit imprimer la page actuelle.
 */

/* window.print cmt faire en sorte que le clique vers un lien n'aille pas vers ce lien (empecher action par defaut d'un lien). 
*/ 

var lien = document.body.getElementsByTagName("a")[0];

lien.addEventListener("click", function(e){
    window.print(); 
    e.preventDefault();
} )





