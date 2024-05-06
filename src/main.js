import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { testAPI } from './apis/testAPI'
const app = createApp(App)

testAPI().then(res => {
    console.log(res)
})


app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
