const {createApp} = Vue;
import contacts from './db.js'

const dt = luxon.DateTime

createApp({
  data(){
    return{
      contacts,
      counter: 0,
      clock:'',
      newMessageString:'',
      nomeRicerca:'',
      messaggioRicerca:'',
      deletNotifications: true,
      mostraMessaggio: true,
      important: true,
    }
  },
  methods:{

    //Funzione nuovo messaggio inviato
    addMessage(){
      this.printClock()
      const newMessage = {
        date: this.clock,
        message: this.newMessageString,
        status: 'sent',
      }
      this.contacts[this.counter].messages.push(newMessage);
      this.newMessageString = '';
      setTimeout(() => {
        this.addAnswerMessage()
      },1000)
    },

    //Funzione messaggio automatico ricevuto after 1s
    addAnswerMessage(){
      this.printClock()
      const newAnswerMessage = {
        date: this.clock,
        message: 'Si, hai proprio ragione',
        status: 'received',
      }
      showNotification();
      this.contacts[this.counter].messages.push(newAnswerMessage);
    },

    //Funzione orario attuale al momento dell'invio messaggio
    printClock(){
      this.clock = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
    },

    //Funzione per ricerca contatto
    ricerca(){
      let parola = this.nomeRicerca.toUpperCase();

      for (let i = 0; i < this.contacts.length; i++) {
        let nameUp = this.contacts[i].name.toUpperCase();

        if (nameUp.includes(parola)) {
          this.contacts[i].visible = true;
        } else {
          this.contacts[i].visible = false;
        }
      }
    },

    //Funzione per eliminare i messaggi
    deleteMessage(index){
      if(this.contacts[this.counter].messages[index].mostraMessaggio){
        this.contacts[this.counter].messages.splice(index,1)
      }
    },
  },

}).mount('#app')

function showNotification(message) {
  Notification.requestPermission().then(function (permission) {
    if (permission === "granted") {
      const options = {
        body: "Esempio di notifica personalizzata con immagine",
        icon: "path/to/logo.png",
        image: "path/to/image.png"
      };
      const notification = new Notification("Titolo della notifica", options);
      notification.onclick = function () {
        console.log("La notifica è stata cliccata");
      };
    }
  });
}