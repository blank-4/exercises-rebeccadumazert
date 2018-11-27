/*

* Pour commencer on veut que vous affichiez dans la console tout les nombres compris entre 1 et un nombre de votre choix avec une boucle for.

* Ensuite on veut que vous vous arrangiez pour que "fizz" s'affiche dans la console a la place de tout multiples de 7 et que les multiples de 5 soient remplacés par "buzz" . (Pensez qu'il est possible d'utiliser un "if else" dans une boucle for) .

c'est ce qu'on appelle un "fizzbuzz" ! ( sans blague ... )

*/ 

for (var n = 1 ; n <= 130; n++) { 
    if (n % 7 == 0) {
        console.log("fizz");
    } else if (n % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(n);
    }
} 

function reverseString(string) {
    return string.split('').reverse().join('')
}
console.log(reverseString('bonjour'));