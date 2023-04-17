const {createApp} = Vue;
import contacts from './db.js'

createApp({
  data(){
    return{
      contacts,
      counter: 0,
    }
  }

}).mount('#app')