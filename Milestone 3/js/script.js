const {createApp} = Vue;
import contacts from './db.js'

const dt = luxon.DateTime

createApp({
  data(){
    return{
      contacts,
      counter: 0,
      clock:'',
      contact:'',
      newMessageString:'',
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
      this.contacts[this.counter].messages.push(newAnswerMessage);
    },

    //Funzione orario attuale al momento dell'invio messaggio
    printClock(){
      this.clock = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
    },


  },

}).mount('#app')