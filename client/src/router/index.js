import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../pinia-store/userStore';
import HeaderApp from '../components/HeaderApp.vue';
import About from '../components/About.vue';
import Login from '../components/login-register/Login.vue';
import Register from '../components/login-register/Register.vue';
import Contacts from '../components/Contacts.vue';
import OurWork from '../components/our-work/OurWork.vue';
import WorkInfo from '../components/our-work/WorkInfo.vue';
import PricingSection from '../components/catalog/Pricing-section.vue';
import TeamSection from '../components/team/Team-section.vue';
import PersonContact from '../components/team/Person-contact.vue';
import Cart from '../components/Cart.vue';
import Profile from '../components/Profile.vue';
import NotFound from '../components/NotFound.vue';


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
        path: '/our-work/:id',
        name: 'work-info',
        component: WorkInfo,
        props: true,
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
        path: '/team-section/:id',
        name: 'person-contact',
        component: PersonContact,
        props: true,
        beforeEnter: () => {
            const userStore = useUserStore();
            return userStore.isAuth ? userStore.isAuth : { path: '/login' };
        }

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
        beforeEnter: () => {
            const userStore = useUserStore();
            return userStore.isAuth ? userStore.isAuth : { path: '/login' };
        },
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
