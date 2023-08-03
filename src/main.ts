import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'
import '@/assets/styles.css'
import Utils from './utils/Utils'
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)
app.config.globalProperties.$utils = Utils
app.use(store)
app.use(router)
app.use(Notifications)
app.mount('#app')

