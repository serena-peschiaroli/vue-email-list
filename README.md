##Esercizio
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
**Bonus**
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

**Soluzione**

1. Inserire nuovo array : [] in return dove inserire i dati generati; creare method per generare 1 email random usando l'API indicata + Axios ;
2. per generare 10 mail, aggiungere in return items : 10, modificare l'api con ?items=${this.items};
3. Implementare in HTML un v-if sull'elemento <ul> per fare in modo che la lista sia visibile solo e soltanto se l'array "email" non sia vuoto
4. Implementare all'interno di HTML un v-for per iterare i dati nel nuovo array generato tramite axios;