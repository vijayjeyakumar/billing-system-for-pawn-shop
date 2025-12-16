import './assets/main.css'
import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import ToastService from 'primevue/toastservice';
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import { definePreset } from '@primevue/themes'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'
import axios from 'axios';

// // Configure once, use everywhere 
// axios.defaults.baseURL = 'http://localhost:3005/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// If UI and API on same server
const protocol = window.location.protocol;
const host = window.location.hostname;
const apiPort = 3005;

axios.defaults.baseURL = `${protocol}//${host}:${apiPort}`; 
console.log("API Base URL:", axios.defaults.baseURL);

//import necessary primeVue components
import Column from 'primevue/column'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import Row from 'primevue/row'
import Message from 'primevue/message'
import Toast from 'primevue/toast'
import Textarea from 'primevue/textarea'
import Card from 'primevue/card'
import Image from 'primevue/image'
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Dialog from 'primevue/dialog'; 

const DarkPreset = definePreset(Aura.dark, {
  semantic: {
    primary: '#00bcd4',
    secondary: '#ff9800',
    surface: '#1e1e2f',
    content: '#e0e0e0',
    highlight: '#4caf50',
    error: '#f44336',
  },
  components: {
    button: {
      root: {
        background: '#00bcd4',
        color: '#ffffff',
        borderRadius: '6px',
        fontWeight: 'bold',
        hover: {
          background: '#0097a7',
        },
      },
    },
    datatable: {
      header: {
        background: '#2c2c3e',
        color: '#ffffff',
      },
      body: {
        background: '#1e1e2f',
        color: '#e0e0e0',
      },
      row: {
        hover: {
          background: '#2e3b4e',
        },
      },
    },
  },
})

//yet to define client store for pinia
//import { userConfigStore } from './stores/'

//Create App & Enable Plugins to our App
const app = createApp(App)
//app.use(createPinia())
app.use(router)
app.use(ToastService);
app.use(PrimeVue, {
  ripple: true,
  pt: DarkPreset,
  nstyled: false,
  dark: true,     
})
//Prime Vue components
app.component('Button', Button)
app.component('Column', Column)
app.component('Card', Card);
app.component('Row', Row)
app.component('InputText', InputText)
app.component('Message', Message)
app.component('Image', Image)
app.component('Textarea', Textarea)
app.component('Toast', Toast)
app.component('DataTable', DataTable) 
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);
app.component('Dialog', Dialog)
//Mount the app
app.mount('#app') 