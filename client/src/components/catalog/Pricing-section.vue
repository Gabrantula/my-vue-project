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
        // ...mapState(useCartStore, ['getOffer']),

        displayProducts() {
            return this.cards
        }
    },
    async created() {
        const promis = await Promise.all([getAllProducts(), []])

        this.cards = promis[0]

        this.isLoading = false
    },
    methods: {
        ...mapActions(useCartStore, ['addToCart'])
    }

};
</script>

<template>
    <!-- Pricing Section -->
    <div id="pricing" class="w3-container w3-center pricing">
        <h3>PRICING</h3>
        <p class="w3-large">
            Choose a pricing plan that fits your needs.
        </p>
        <Loader v-if="isLoading" />
        <div v-else class="w3-row-padding">

            <PricingCard v-for="card in displayProducts" :key="card._id" :card="card" @on-add-to-cart="addToCart">

            </PricingCard>
        </div>
    </div>
</template>


<style  scoped>
#pricing {
    padding: 128px 16px
}

.w3-row-padding {
    width: 80vw;
    margin: 0 auto;
}
</style>



