import { createApp } from 'vue'
import router from './script/router'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
    .use(router)
    .mount('#app')


window.Kakao.init("c4f3f6252aaa055e93c941122a261a58");