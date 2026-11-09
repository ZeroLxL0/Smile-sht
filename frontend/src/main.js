import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './style.css'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'broteTheme',
    themes: {
      broteTheme: {
        dark: false,
        colors: {
          background: '#F7F5F0',
          surface: '#FFFFFF',
          primary: '#526B57',
          secondary: '#D99B70',
          accent: '#D9C9A8',
          error: '#B84C4C',
          success: '#527B65',
        },
      },
    },
  },
})

createApp(App).use(router).use(vuetify).mount('#app')
