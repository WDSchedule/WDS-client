import { createApp } from 'vue';    //导入vue
import ElementPlus from 'element-plus'; //导入element-plus
import 'element-plus/dist/index.css';   //导入element-plus的样式
import App from './App.vue';    // 导入app.vue
import locale from 'element-plus/dist/locale/zh-cn.js'
import router from '@/router';  //导入路由
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-persistedstate-plugin';

const pinia = createPinia()
const persist = createPersistedState();
pinia.use(persist);
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ElementPlus, {locale})
app.mount('#app')