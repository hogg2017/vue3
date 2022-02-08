/*
 * @Email: deuntlt@gmail.com
 * @Author: hogger
 * @Github: xxxx
 * @Date: 2022-02-04 18:52:52
 * @Description:
 */
import {
  createApp
} from 'vue'
import App from './App.vue'
import router from '../router/index'
const app = createApp(App)
app.use(router).mount('#app')
