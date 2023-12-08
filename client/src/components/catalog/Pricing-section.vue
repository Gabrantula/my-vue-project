<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../../pinia-store/userStore';
import { getAllProducts } from '../../services/products';
import Loader from '../../components/Loader.vue';
import PricingCard from './pricingCard.vue';
import { useCartStore } from '../../pinia-store/cartStore';

export default {
    components: { Loader, PricingCard },
    data() {
        return {
            cards: [],
            isLoading: true
        }
    },
    computed: {
        ...mapState(useUserStore, ['isAuth']),
        ...mapState(useCartStore, ['getOffer']),

        displayProducts() {
            return this.cards
        }
    },
    async created() {
        const promis = await Promise.all([getAllProducts(), []])
        // this.products = promis[0].products
        this.cards = promis[0]
        // console.log(this.cards);
        // console.log(promis);
        this.isLoading = false
    },
    methods: {
        ...mapActions(useCartStore, ['addToCart'])
    }
};
</script>

<template>
    <!-- Pricing Section -->
    <!-- <div class="w3-container w3-center w3-dark-grey" style="padding:128px 16px" id="pricing"> -->
    <div id="pricing" class="w3-container w3-center pricing" style="padding:128px 16px">
        <h3>PRICING</h3>
        <p class="w3-large">
            Choose a pricing plan that fits your needs.
        </p>
        <Loader v-if="isLoading" />
        <div v-else class="w3-row-padding" style="margin-top:64px">
            <!--  
            <div class="w3-third w3-section">
                <ul class="w3-ul w3-white w3-hover-shadow">
                    <li class="w3-black w3-xlarge w3-padding-32">
                        Basic
                    </li>
                    <li class="w3-padding-16">
                        <b>10GB</b> Storage
                    </li>
                    <li class="w3-padding-16">
                        <b>10</b> Emails
                    </li>
                    <li class="w3-padding-16">
                        <b>10</b> Domains
                    </li>
                    <li class="w3-padding-16">
                        <b>Endless</b> Support
                    </li>
                    <li class="w3-padding-16">
                        <h2 class="w3-wide">
                            $ 10
                        </h2>
                        <span class="w3-opacity">per month</span>
                    </li>
                    <li class="w3-light-grey w3-padding-24">

                        <router-link v-if="isAuth" to="/cart" class="w3-button w3-black w3-padding-large">
                            Buy now
                        </router-link>
                        <router-link v-if="!isAuth" to="/login" class="w3-button w3-black w3-padding-large">
                            Buy now
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="w3-third">
                <ul class="w3-ul w3-white w3-hover-shadow">
                    <li class="w3-red w3-xlarge w3-padding-48">
                        Pro
                    </li>
                    <li class="w3-padding-16">
                        <b>25GB</b> Storage
                    </li>
                    <li class="w3-padding-16">
                        <b>25</b> Emails
                    </li>
                    <li class="w3-padding-16">
                        <b>25</b> Domains
                    </li>
                    <li class="w3-padding-16">
                        <b>Endless</b> Support
                    </li>
                    <li class="w3-padding-16">
                        <h2 class="w3-wide">
                            $ 25
                        </h2>
                        <span class="w3-opacity">per month</span>
                    </li>
                    <li class="w3-light-grey w3-padding-24">
                        <router-link v-if="isAuth" to="/cart" class="w3-button w3-black w3-padding-large">
                            Buy now
                        </router-link>
                        <router-link v-if="!isAuth" to="/login" class="w3-button w3-black w3-padding-large">
                            Buy now
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="w3-third w3-section">
                <ul class="w3-ul w3-white w3-hover-shadow">
                    <li class="w3-black w3-xlarge w3-padding-32">
                        Premium
                    </li>
                    <li class="w3-padding-16">
                        <b>50GB</b> Storage
                    </li>
                    <li class="w3-padding-16">
                        <b>50</b> Emails
                    </li>
                    <li class="w3-padding-16">
                        <b>50</b> Domains
                    </li>
                    <li class="w3-padding-16">
                        <b>Endless</b> Support
                    </li>
                    <li class="w3-padding-16">
                        <h2 class="w3-wide">
                            $ 50
                        </h2>
                        <span class="w3-opacity">per month</span>
                    </li>
                    <li class="w3-light-grey w3-padding-24">
                        <router-link v-if="isAuth" to="/cart" class="w3-button w3-black w3-padding-large">
                            Buy now
                        </router-link>
                        <router-link v-if="!isAuth" to="/login" class="w3-button w3-black w3-padding-large">
                            Buy now
                        </router-link>
                    </li>
                </ul>
            </div>
-->
            <div v-for="card in displayProducts" :key="card._id" :card="card" class="w3-third w3-section">

                <ul class="w3-ul w3-white w3-hover-shadow">
                    <li class="w3-black w3-xlarge w3-padding-32">
                        {{ card.title }}
                    </li>
                    <li class="w3-padding-16">
                        <b>{{ card.storage }}</b> Storage
                    </li>
                    <li class="w3-padding-16">
                        <b>{{ card.emails }}</b> Emails
                    </li>
                    <li class="w3-padding-16">
                        <b>{{ card.domains }}</b> Domains
                    </li>
                    <li class="w3-padding-16">
                        <b>{{ card.support }}</b> Support
                    </li>
                    <li class="w3-padding-16">
                        <h2 class="w3-wide">
                            $ {{ card.price }}
                        </h2>
                        <span class="w3-opacity">per month</span>
                    </li>
                    <li class="w3-light-grey w3-padding-24">
                        <!--  <button class="w3-button w3-black w3-padding-large">Sign Up</button> -->
                        <router-link v-if="isAuth" to="/cart" @click="addToCart"
                            class="w3-button w3-black w3-padding-large">
                            Buy now
                        </router-link>
                        <router-link v-if="!isAuth" to="/login" class="w3-button w3-black w3-padding-large">
                            Buy now
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style  scoped></style>
