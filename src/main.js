import { createApp } from 'vue'
import App from './App.vue'
import routes from './Router'
import './style.css'

const app = createApp(App)

app.use(routes)
app.mount('#app')
