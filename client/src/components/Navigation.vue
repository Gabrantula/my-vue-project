<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../pinia-store/userStore';
import { useCartStore } from '../pinia-store/cartStore';

export default {

    computed: {
        ...mapState(useUserStore, ['isAuth', 'profile']),
        ...mapState(useCartStore, ['cards'])
    },
    methods: {
        ...mapActions(useUserStore, ['logout']),
    },
};
</script>

<template>
    <!-- Navbar (sit on top) -->
    <div class="w3-top">
        <div id="myNavbar" class="w3-bar w3-white w3-card">
            <router-link to="/" class="w3-bar-item w3-button w3-wide">
                <img class="logo"
                    src="https://logo.com/image-cdn/images/kts928pd/production/f92e3b78748eff69f8ee3fd9e59b419d1ebbe41a-315x323.png?w=1080&q=72"
                    alt="">
            </router-link>
            <!-- Right-sided navbar links -->
            <div class="w3-right w3-hide-small">
                <router-link to="/about" class="w3-bar-item w3-button">
                    ABOUT
                </router-link>
                <router-link to="/team-section" class="w3-bar-item w3-button">
                    <i class="fa fa-user" /> TEAM
                </router-link>
                <router-link to="/our-work" class="w3-bar-item w3-button">
                    <i class="fa fa-th" /> WORK
                </router-link>
                <router-link to="/pricing-section" class="w3-bar-item w3-button">
                    <i class="fa fa-usd" /> PRICING
                </router-link>
                <router-link to="contacts" class="w3-bar-item w3-button">
                    <i class="fa fa-envelope" /> CONTACT
                </router-link>
                <router-link v-if="!isAuth" to="/login" class="w3-bar-item w3-button">
                    LOGIN
                </router-link>
                <router-link v-if="!isAuth" to="/register" class="w3-bar-item w3-button">
                    REGISTER
                </router-link>
                <router-link v-if="isAuth" to="/profile" class="w3-bar-item w3-button">
                    👤 Profile
                </router-link>
                <router-link v-if="isAuth" to="/cart" class="w3-bar-item w3-button">
                    🛒 CART <span v-if="cards.length">({{ cards.length }})</span>
                </router-link>
                <router-link v-if="isAuth" to="/" class="w3-bar-item w3-button" @click="logout">
                    LOGOUT
                </router-link>
            </div>
            <!-- Hide right-floated links on small screens and replace them with a menu icon -->

            <router-link to="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
                onclick="w3_open()">
                <i class="fa fa-bars" />
            </router-link>


        </div>
    </div>

    <!-- Sidebar on small screens when clicking the menu icon -->
    <nav id="mySidebar" class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
        style="display:none">
        <router-link to="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">
            Close ×
        </router-link>
        <router-link to="/router-linkbout" onclick="w3_close()" class="w3-bar-item w3-button">
            ABOUT
        </router-link>
        <router-link to="/team-section" onclick="w3_close()" class="w3-bar-item w3-button">
            TEAM
        </router-link>
        <router-link to="/our-work" onclick="w3_close()" class="w3-bar-item w3-button">
            WORK
        </router-link>
        <router-link to="/pricing-section" onclick="w3_close()" class="w3-bar-item w3-button">
            PRICING
        </router-link>
        <router-link to="/contacts" onclick="w3_close()" class="w3-bar-item w3-button">
            CONTACT
        </router-link>
        <router-link v-if="!isAuth" to="/login" onclick="w3_close()" class="w3-bar-item w3-button">
            LOGIN
        </router-link>
        <router-link v-if="!isAuth" to="/register" onclick="w3_close()" class="w3-bar-item w3-button">
            REGISTER
        </router-link>
        <router-link v-if="isAuth" to="/profile" class="w3-bar-item w3-button">
            👤 Profile
        </router-link>
        <router-link v-if="isAuth" to="/cart" onclick="w3_close()" class="w3-bar-item w3-button">
            🛒 CART <span v-if="cards.length">({{ cards.length }})</span>
        </router-link>
        <router-link v-if="isAuth" to="/" class="w3-bar-item w3-button" @click="logout">
            LOGOUT
        </router-link>
    </nav>
</template>

<style  scoped>
.logo {
    width: 7rem;
    height: 3rem;
    box-shadow: 2px 2px 2px gray;
}
</style>
