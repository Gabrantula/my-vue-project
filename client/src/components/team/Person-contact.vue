
<script>
import { getSinglePerson } from '../../services/team'


export default {
    props: ["id"],

    data() {
        return {
            person: [],

        };
    },
    async created() {
        this.person = await getSinglePerson(this.$route.params.id);

    },

}
</script>
<template>
    <div class="box">
        <div class="image">
            <img :src="person.image" alt="img">
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
    margin: 10% auto 2% auto;
    box-shadow: 5px 5px 10px rgb(80, 138, 115);
    border-radius: 3%;
}

.box .image {
    width: 45%;
    height: 90%;
    box-shadow: 5px 5px 10px rgb(80, 138, 115);
    border-radius: 3%;
    overflow: hidden;
    margin-top: 30px;
    margin-left: 1%;
    filter: brightness(75%);
}

.image img {
    width: 100%;
    height: 100%;
}

.box .info {
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


