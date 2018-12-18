
new Vue({
    el:"#app",
    data: function() {
        return{
            checked: false,
            message: "modifiez-moi"
        }
    }, 
    methods: {
        alert: function(){
            alert(this.message);
        }
    }     
})