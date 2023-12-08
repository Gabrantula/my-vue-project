
<script>
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
    }
}
</script>
<template>
    <li class="w3-black w3-xlarge w3-padding-32">
        {{ card.title }}
    </li>
    <li class="w3-padding-16">
        <b>{{ card.storage }}</b> Storage
    </li>
    <li class="w3-padding-16">
        <b>{{ carrd.emails }}</b> Emails
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
        <router-link v-if="isAuth" to="/cart" class="w3-button w3-black w3-padding-large">
            Buy now
        </router-link>
        <router-link v-if="!isAuth" to="/login" class="w3-button w3-black w3-padding-large">
            Buy now
        </router-link>
    </li>
</template>



<style  scoped></style>