 var nv = new Vue ({
    el:"#app",
    data: function() {
        return {
            monText : ""
        }
    },
    methods: {
        requete() {
            var key="vSm226cE86ffI3WoE2Is6NnLB3G5opqs";
            var query = this.monText;
            var request = new XMLHttpRequest(); 
            request.open("GET", "http://api.giphy.com/v1/gifs/search?q="+query+"&api_key="+key+"&limit=5", true);
            console.log("requestIs: "+"http://api.giphy.com/v1/gifs/search?q="+texte+"&api_key="+key+"&limit=5");
            request.send();
        }
    }
 })