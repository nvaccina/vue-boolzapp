Vue Boolzapp
===
Milestone 1 <br>
●	Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse<br>
●	Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto<br>

## Steps
- Creazione del main-container con sfondo doppio colore, creazione del container con all'interno row e 2 col, una per contact e una per chat
- Nella col contact inserire user, attivazione notifiche, barra search e contacts-thumbs con scroll;
- Creazione db con contacts e collegamento a script.js e html con aggiunta Vuejs cdn;
-Creazione col per chat;
- Ciclo v-for lista contatti;
- Collegamento contacts list e contatto selezionato con data ultimo accesso = a data ultimo suo messaggio inviato;
- Ciclo v-for per collegare le chat all'utente cliccato;
- Assegnazione classi ai messaggi differenziati per 'sent' e 'received';
- Aggiunta funzione che scrivendo un messaggio nell'input mi crea un nuovo messaggio che viene pushato nell'array messages ed è visibile in chat;
- Creata funzione per assegnare ai nuovi messaggi la data attuale all'invio del messaggio;
- Aggiunta dell'ultimo messaggio presente in chat e della data al thumb contact;
- Creata funzione per cercare contatti nella lista thumbs e collegata all'input di ricerca;
- Aggiunta della 'X' per chiudere finestra di attivazione notifiche;
- Aggiunto menu a tendita nel messaggio;
- Bonus, creata funzione per eliminare ogni singolo messaggio dal menu a tendina;
- Aggiunta opzione messaggio preferito;
- Aggiunta barra di ricerca messaggi all'interno della chat al click della lente di ingrandimento;