import { defineStore } from 'pinia';
import { useCartStore } from './cartStore';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            isAuth: false,
            profile: null,
            cards: useCartStore()
        };
    },
    actions: {
        setProfile(profileData) {
            this.profile = profileData;
            this.isAuth = true;
            sessionStorage.setItem('user', JSON.stringify(profileData));
        },
        getProfile() {
            const persisted = sessionStorage.getItem('user');
            if (!persisted) {
                return;
            }
            this.profile = JSON.parse(persisted);
            this.isAuth = true;
        },
        logout() {
            this.isAuth = false;
            this.profile = null;
            this.cards.$reset()
            sessionStorage.removeItem('user');
        },
    },
});
