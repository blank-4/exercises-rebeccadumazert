var nouvellevue = new Vue ({
    el:"#app",
    data: function() {
        return{
            message: "",
        }
    },
    watch: {
        message: function (value) {
            console.log(value);
            if (value =="vue") return alert("vue")
        }
    }
})