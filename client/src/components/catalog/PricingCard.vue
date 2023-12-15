
<script>
import { mapState } from 'pinia';

import { useCartStore } from '../../pinia-store/cartStore';
import { useUserStore } from '../../pinia-store/userStore';


export default {
    props: {
        card: {
            type: Object,
            required: true,
            default: () => ({
                _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8",
                title: "Default",
                storage: 'Default',
                emails: 'Default',
                domains: 'Default',
                support: 'Default',
                price: '0',
                _createdOn: 1616162253496,
                _id: "-1",
            })
        }
    },
    emits: ['onAddToCart'],
    computed: {
        ...mapState(useCartStore, ['getOffer']),
        ...mapState(useUserStore, ['isAuth']),
    },

}
</script>
<template>
    <div class="w3-third w3-section">

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

                <router-link v-if="isAuth" to="/cart" @click="$emit('onAddToCart', card._id)"
                    class="w3-button w3-black w3-padding-large">
                    Buy now
                </router-link>
                <router-link v-if="!isAuth" to="/login" class="w3-button w3-black w3-padding-large">
                    Buy now
                </router-link>
            </li>
        </ul>
    </div>
</template>



<style  scoped></style>
