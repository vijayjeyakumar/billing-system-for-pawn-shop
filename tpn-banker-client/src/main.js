import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import { definePreset } from '@primevue/themes'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'

//import necessary primeVue components
import Column from 'primevue/column'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import Row from 'primevue/row'
import Message from 'primevue/message'
import Toast from 'primevue/toast'
import Textarea from 'primevue/textarea'
import Image from 'primevue/image'
//import '@fontawesome/fontawesome-free/css/all.css'

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
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: DarkPreset,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
})

//Prime Vue components
app.component('PrimeButton', Button)
app.component('Column', Column)
app.component('InputTable', InputTable)
app.component('Row', Row)
app.component('InputText', InputText)
app.component('Message', Message)
app.component('Image', Image)
app.component('Textarea', Textarea)
app.component('Toast', Toast)
app.component('DataTable', DataTable)

//Mount the app
app.mount('#app')
