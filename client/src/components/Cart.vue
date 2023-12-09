<script>
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '../pinia-store/cartStore';
import { getProduct } from '../services/products';

export default {
    data() {
        return {
            offerInfo: {},
            isLoading: true
        }
    },
    computed: {
        ...mapState(useCartStore, ['cards']),

        totalSum() {
            let sum = 0
            this.cards.forEach((offer) => {
                sum += (this.offerInfo[offer._id]?.price ?? 0) * offer.quantity
            })
            return sum
        },
    },
    async created() {
        const promis = []
        this.cards.forEach((offer) => {
            promis.push(getProduct(offer._id))
        })
        const allOffers = await Promise.all(promis)
        allOffers.forEach((offer) => {
            this.offerInfo[offer._id] = offer
        })
        console.log(promis);
        this.isLoading = false

    },
    methods: {
        ...mapActions(useCartStore, ['changeQuantity'])
    }
};
</script>

<template>
    <h1 style="text-align: center;">
        Cart
    </h1>
    <!-- <Loader v-if="isLoading" /> -->


    <div class="container">
        <article>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="offer in cards" :key="offer._id">
                        <td>
                            <div style="aspect-ratio: 1/1; width: 5rem; border-radius: 0.5rem; overflow: hidden;">
                                {{ offerInfo[offer._id].title }}
                            </div>
                        </td>
                        <td>
                            <p style="font-size: 1.25rem;">
                                {{ offerInfo[offer._id].support }}
                            </p>
                            <p style="font-size: 0.75rem;">
                                Product price: {{ offerInfo[offer._id].price }}$
                            </p>
                        </td>

                        <td>
                            <input type="number" :value="offer.quantity" style="width: 5rem;"
                                @input="changeQuantity(offer._id, $event)">
                        </td>
                        <td class="price">
                            {{ offerInfo[offer._id].price * offer.quantity }}$
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3">
                            Total:
                        </td>
                        <td class="price">
                            {{ totalSum }}$
                        </td>
                    </tr>
                </tfoot>
            </table>
        </article>
    </div>
</template>

<style  scoped>
table {
    max-width: 720px;
    margin: 0 auto;
}
</style>
