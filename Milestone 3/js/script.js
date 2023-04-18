const {createApp} = Vue;
import contacts from './db.js'

createApp({
  data(){
    return{
      contacts,
      counter: 0,
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
      console.log(newMessage);

      this.contacts[this.counter].messages.push(newMessage);
      this.newMessageString = '';
      console.log(contacts);
    }
  }

}).mount('#app')