import { createApp } from 'vue'
import App from './App.vue'

import config from './config'

const app = createApp(App)
app.config.globalProperties.$config = config
app.mount('#app')
