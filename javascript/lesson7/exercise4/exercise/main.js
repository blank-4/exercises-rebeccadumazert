/* Créez un champ texte, un paragraphe qui affichera le contenu du champ texte ainsi qu'une checkbox. Lorsque la checkbox est cochée, le texte affiché doit etre de couleur rouge, sinon le texte sera noir. Vous devez utiliser le système de classes et le système de classes avec fonction. */

new Vue({
    el:"#app",
    data: function() {
        return{
            message: "",
            checked: false
        }
    }
})