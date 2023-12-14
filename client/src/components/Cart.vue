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
    <!-- <Loader v-if="isLoading" /> -->

    <div class="container">
        <article>
            <div class="cart">
                <h2>Shopping Cart</h2>
            </div>
            <div class="break"></div>

            <div class="info">
                <div class="titles">
                    <h3>Product</h3>
                    <h3>Price</h3>
                    <h3>Quantity</h3>
                    <h3>Total</h3>
                </div>
                <div class="break"></div>

                <div class="table" v-for="offer in cards" :key="offer._id">
                    <div class="item start">
                        <p style="font-size: 1.25rem;">
                            {{ offerInfo[offer._id].title }}
                        </p>
                    </div>
                    <div class="item center">
                        <p style="font-size: 1rem;">

                            {{ offerInfo[offer._id].price }}$
                        </p>
                    </div>
                    <div class="item center">
                        <input type="number" :value="offer.quantity" style="width: 4.5rem;"
                            @input="changeQuantity(offer._id, $event)">
                    </div>
                    <div class="item end">

                        <span>{{ offerInfo[offer._id].price * offer.quantity }}$</span>
                    </div>

                </div>

                <div class="total">
                    <span class="shadow">Total sum: </span><span> {{ totalSum }}$</span>
                </div>
            </div>

            <!-- 
    <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="offer in cards" :key="offer._id">
                        <td>
                            <p style="font-size: 1.25rem;">
                                {{ offerInfo[offer._id].title }}
                            </p>
                        </td>
                        <td>

                            <p style="font-size: 0.75rem;">

                                {{ offerInfo[offer._id].price }}$
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
-->

        </article>
    </div>
</template>

<style  scoped>
/*.container {
    margin: 100px auto;
}

.cart {
    text-align: center;
}

table {
    max-width: 720px;
    margin: 0 auto;
}*/
.container {
    margin: 100px auto;
    position: relative;
}

article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 720px;
    margin: 0 auto;
}

article .cart h2 {
    text-shadow: 2px 4px 10px gray;
}

.break {
    width: 100%;
    height: 1.5px;
    background-color: gray;
    margin-bottom: 2%;
    margin-top: 2%;
}

.info {
    display: flex;
    flex-direction: column;
    width: 100%;

}

.info .titles {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: rgb(80, 138, 115);
    text-shadow: 2px 4px 10px gray;
}

.info .table {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.info .table .item {
    width: 24%;
    text-align: center;
}

.info .table .start {
    text-align: start;
}

.info .table .end {
    text-align: right;
}

.info .total {
    position: absolute;
    right: 10%;
    bottom: 10%;
    font-size: 1.5rem;
}

span {
    font-style: italic;
    color: rgb(80, 138, 115);
}

.shadow {
    color: black;
    text-shadow: 2px 4px 10px gray;
}

input {
    margin-left: 30px;
}
</style>
