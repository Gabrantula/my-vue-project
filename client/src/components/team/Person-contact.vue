
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
<<<<<<< HEAD
    /* margin-top: 12vh;*/
    margin: 10% auto 2% auto;
    box-shadow: 5px 5px 10px rgb(80, 138, 115);
    border-radius: 3%;
}

.box .image {
    width: 45%;
    height: 90%;
    /* margin-left: 3%;*/
    box-shadow: 5px 5px 10px rgb(80, 138, 115);
    border-radius: 3%;
    overflow: hidden;
    margin-top: 30px;
    margin-left: 1%;
    filter: brightness(75%);
=======
    margin-top: 10vh;
}

.box .image {
    width: 50%;
    height: 50vh;
>>>>>>> 85bf90df8c05c4fe1779a9fd4c0fa76006318fe8
}

.image img {
    width: 100%;
    height: 100%;
}

.box .info {
<<<<<<< HEAD
    text-align: center;

}

.info h3 {
    font-size: 2rem;
    letter-spacing: 1.5px;
    margin-top: 40px;
    margin-bottom: 40px;
    position: relative;
    display: inline-block;
    color: rgb(80, 138, 115);
    text-shadow: 2px 4px 10px gray;
}

.info h3::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    margin: 10px auto;
    width: 50%;
    height: 2px;
    background-color: rgb(80, 138, 115);
}

.info :nth-child(3) {
    font-size: 1.4rem;
    font-style: italic;
    margin-top: 30px;
}

.info :nth-child(4) {
    margin-top: 30px;
    font-size: 1.7rem;
    letter-spacing: 1.5px;
    color: rgb(80, 138, 115);

}
</style>
=======

    margin: 0 auto;
}
</style>
>>>>>>> 85bf90df8c05c4fe1779a9fd4c0fa76006318fe8
