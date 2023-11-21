
const { createApp } = Vue;

createApp({
    data(){
        
        return{
            // Array per memorizzare gli indirizzi email generati
            emails: [],
              // Numero di email da generare
            items: 10,
            // Contatore per tracciare le richieste completate
            completedReq: 0,

        };
    },
    methods:{
        // Metodo per generare gli indirizzi email
        generaEmail(){
            // Azzera l'array di email quando si avvia la generazione
            this.emails= [];
            this.completedReq = 0;
            // Loop per effettuare le richieste di generazione email
            for (let i = 0; i < this.items; i++){
                // Verifica se il counter è minore delle email da generare
                if (this.completedReq < this.items){
                    // Effettua una richiesta al servizio API per ottenere un indirizzo email casuale
                    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                    .then(response => {
                        // Aggiunge l'indirizzo email all'array
                    this.emails.push(response.data.response);
                    // Incrementa il contatore 
                    this.completedReq++;
                        // Se il contatore è === ad items, stampa l'array di email
                    if(this.completedReq === this.items) {
                        console.log(this.emails);
                    }
                    });
                }
                
            }
            
        }

    },
    
}).mount("#app");