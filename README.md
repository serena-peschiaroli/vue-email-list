##Esercizio
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
**Bonus**
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

**Soluzione**

1. Inserire nuovo array : [] in return dove inserire i dati generati; 
2. inserire un counter = 0 in return per azzerare il loop;
3. inserire in return items = 10 per generare 10 email;
4. creare metodo generaEmail con un loop for all'interno per gestire la richiesta 10 volte:
5. se il counter < di item=10 --> richiedere il dato ad axios e pusharlo nell'array vuoto; aggiornare il counter;
6. se il counter === items, terminare loop e loggare risultato
7. Implementare in HTML un v-if sull'elemento <ul> per fare in modo che la lista sia visibile solo e soltanto se l'array "email" non sia vuoto
8. Implementare all'interno di HTML un v-for per iterare i dati nel nuovo array generato tramite axios;