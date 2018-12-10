/* * créer une page html vide .()

* Dans votre script créez une fonction qui contiendra le code pour les consignes suivantes :

* déclarer un tableau contenant quatre items .

* insérer une ul contenant quatre li ayant chacune pour contenu un item du tableau .
 */ 

 function exercise4() {
     var tab = ["adidas", "nike", "north face", "puma"];
     var newList = document.createElement("ul");
     document.body.appendChild(newList);
     for (var i = 0 ; i < tab.length; i++) {
         var newLi = document.createElement("li");
         newLi.innerHTML = tab[i];
         newList.appendChild(newLi);
     }
 }

 exercise4();