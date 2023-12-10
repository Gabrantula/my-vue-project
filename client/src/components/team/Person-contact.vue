
<script>
//import PersonCard from './PersonCard.vue';
import { getSinglePerson } from '../../services/team'
import { mapState } from 'pinia';
import { useTeamStore } from '../../pinia-store/teamStore';


export default {
    props: ["id"],
    // components: { PersonCard },
    data() {
        return {
            person: [],
            // isLoading: true,
        };
    },
    async created() {
        this.person = await getSinglePerson(this.$route.params.id);
        // this.isLoading = false;
    },

    /* props: {
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
     computed: {
 
         ...mapState(useTeamStore, ['getPerson'])
     },*/

}
</script>
<template>
    <div class="box">
        <div class="image">
            <img :src="person.image" alt="img" style="width:100%">
        </div>
        <div class="info">
            <h3>{{ person.name }}</h3>
            <p class="w3-opacity">
                {{ person.position }}
            </p>
            <p>
                {{ person.description }}
            </p>
            <p><i class="fa fa-envelope" /> {{ person.phone }}</p>
        </div>
    </div>
</template>



<style scoped>
.box {
    width: 70vw;
    height: 70vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10vh;
}

.box .image {
    width: 50%;
    height: 50vh;
}

.image img {
    width: 100%;
    height: 100%;
}

.box .info {

    margin: 0 auto;
}
</style>