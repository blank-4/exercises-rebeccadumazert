var mavue = new Vue({
    el:"#app",
    beforeCreate: () => {
        console.log("beforeCreate");
    },
    created: (e) => {
        console.log("created", e, this);
    },
    beforeMount: (e) => {
        console.log("beforeMount", e, this);
    },
    mounted: (e) => {
        console.log("mounted", e, this);
    },
    beforeDestroy: (e) => {
        console.log("beforedestroy", e, this);
    },
    destroyed: (e) => {
        console.log("destroyed", e, this);
},
})