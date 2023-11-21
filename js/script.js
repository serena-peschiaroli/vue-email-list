
const { createApp } = Vue;

createApp({
    data(){
        
        return{
            email: [],
            items: 10,

        };
    },
    methods:{
        generaEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.email= response.data;
                console.log(response.data);

            })
        }

    },
    
}).mount("#app");