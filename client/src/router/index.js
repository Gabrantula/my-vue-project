import { createRouter, createWebHistory } from 'vue-router';
import HeaderApp from '../components/HeaderApp.vue';
import About from '../components/About.vue';
import Login from '../components/login-register/Login.vue';
import Register from '../components/login-register/Register.vue';
import Contacts from '../components/Contacts.vue';
import OurWork from '../components/OurWork.vue';
import PricingSection from '../components/catalog/Pricing-section.vue';
import TeamSection from '../components/Team-section.vue';
import Cart from '../components/Cart.vue';
import Profile from '../components/Profile.vue';
import NotFound from '../components/NotFound.vue';
import { useUserStore } from '../pinia-store/userStore';

/* function validateUser() {
    const userStore = useUserStore()
    return userStore.isAuth ? userStore.isAuth : {path: '/login'}
} */
const routes = [
    {
        path: '/',
        component: HeaderApp,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/login',
        component: Login,
        beforeEnter: () => {
            const userStore = useUserStore();
            return userStore.isAuth ? { path: '/profile' } : true;
        },
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/contacts',
        component: Contacts,
    },
    {
        path: '/our-work',
        component: OurWork,
    },
    {
        path: '/pricing-section',
        component: PricingSection,
    },
    {
        path: '/team-section',
        component: TeamSection,
    },
    {
        path: '/profile',
        component: Profile,
        beforeEnter: () => {
            const userStore = useUserStore();
            return userStore.isAuth ? userStore.isAuth : { path: '/login' };
        },
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
