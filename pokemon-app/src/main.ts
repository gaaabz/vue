import router from '@/routes/routes'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App)
.use(router)
.mount('#app')
