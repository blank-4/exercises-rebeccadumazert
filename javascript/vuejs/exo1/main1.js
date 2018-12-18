/* var example1 = new Vue({
    el: '#example-1',
    data: {
        items : [
            { message: 'Alex' },
            { message: 'Erwan' },
            { message: 'Marin' }
        ]

    }
}) */

new Vue({ 
    el: '#example-1',
    data: function() {
        return {
        profs: {
        Alex: ['Lundi','Mardi','Mercredi','Vendredi'],
        Erwan: ['Vendredi'],
        Marin: ['Lundi','Mardi','Mercredi','Jeudi']
        }
     }
    }
})

