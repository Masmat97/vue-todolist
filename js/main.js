const { createApp } = Vue 

createApp({
    data() {
        return {
            lists:[
                "Fare la spesa",
                "Fare le pulizie",
                "Preparare il pranzo",
                "Lavare i piatti",
                "Lavare i panni",
                "Andare in palestra",
                "Fare la doccia"
            ],


        }
    },

methods: {

},

mounted() {

}
    
}).mount(`#app`)