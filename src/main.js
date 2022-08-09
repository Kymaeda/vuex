import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store' // `index` is default file name, so you can omit

const app = createApp(App);
app.use(store)
app.mount('#app')
