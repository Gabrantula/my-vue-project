<script>
import { mapState } from 'pinia';

import { useUserStore } from '../../pinia-store/userStore';
import { useTeamStore } from '../../pinia-store/teamStore';

export default {

    props: {
        person: {
            type: Object,
            required: true,
            default: () => ({
                image: "/pic/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg",
                name: "DEFAULT",
                position: "DEFAULT",
                description: "DEFAULT",
                phone: "0",
                id: "-2"
            })
        }
    },
    //  emits: ['onContact'],
    computed: {
        ...mapState(useUserStore, ['isAuth']),
        ...mapState(useTeamStore, ['getPerson'])
    },

}
</script>
<template>
    <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-card">
            <img :src="person.image" alt="img" style="width:100%">
            <div class="w3-container">
                <h3>{{ person.name }}</h3>
                <p class="w3-opacity">
                    {{ person.position }}
                </p>
                <p>
                    {{ person.description }}
                </p>
                <p>

                    <!-- tova e bez emit-->
                    <router-link :to="{ name: 'person-contact', params: { id: person.id } }" v-if="isAuth"
                        class="w3-button w3-light-grey w3-block" style="margin-bottom: 10px;">
                        <i class="fa fa-envelope" /> Contact
                    </router-link>

                    <!-- 
      <router-link :to="{ name: 'person-contact', params: { id: person.id } }" v-if="isAuth"
                        @click="$emit('onContact', person.id)" class="w3-button w3-light-grey w3-block">
                        <i class="fa fa-envelope" /> Contact
                    </router-link>
-->
                </p>
            </div>
        </div>
    </div>
</template>



<style scoped></style>