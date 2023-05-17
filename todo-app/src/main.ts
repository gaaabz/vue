import App from '@/App.vue'
import '@/assets/main.css'
import router from '@/routes/routes'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

createApp(App).use(router).use(createPinia()).mount('#app')
