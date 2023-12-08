import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            isAuth: false,
            profile: null,
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
            sessionStorage.removeItem('user');
        },
    },
});
