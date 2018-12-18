var request = new XMLHttpRequest(); //création de la requête
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //ici on vérifie que si l'état change
    // il faut qu'il soit bon. Status : 200 signifie que la requête s'est bien passée
    // readyState : 4 signifie que la requête est finie et que la réponse est prête
        console.log(request.responseText);
        
    }
};
request.open("GET", "http://localhost:8000/data.json", true); //spécification de la
// requête, l'adresse et si la requête est asynchrone (non bloquante)
request.send(); //envoie de la requête