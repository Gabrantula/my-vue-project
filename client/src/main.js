import { createApp } from 'vue';
import './styles/reset.css';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { useUserStore } from './pinia-store/userStore';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);

const userStore = useUserStore();
userStore.getProfile();
app.mount('#app');
