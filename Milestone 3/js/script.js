const {createApp} = Vue;
import contacts from './db.js'

const dt = luxon.DateTime

createApp({
  data(){
    return{
      contacts,
      counter: 0,
      clock:null,
      contact:'',
      newMessageString:'',
    }
  },
  methods:{
    addMessage(){

      const newMessage = {
        date: '18/04/2023',
        message: this.newMessageString,
        status: 'sent',
      }

      this.contacts[this.counter].messages.push(newMessage);
      this.newMessageString = '';
      setTimeout(() => {
        this.addAnswerMessage()
      },1000)
    },

    addAnswerMessage(){
      const newAnswerMessage = {
        date: '18/04/2023',
        message: 'Si, hai proprio ragione',
        status: 'received',
      }
      this.contacts[this.counter].messages.push(newAnswerMessage);

    },

    
  }

}).mount('#app')