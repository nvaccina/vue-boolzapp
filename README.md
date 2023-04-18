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
- Collegamento contacts lista e selezionato;
- Ciclo v-for per collegare le chat all'utente cliccato;
- Assegnazione classi ai messaggi differenziati per 'sent' e 'received';