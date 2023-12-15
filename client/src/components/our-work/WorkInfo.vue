
<script>

import { getSingleItem } from '../../services/work';

export default {
    props: ["id"],

    data() {
        return {
            item: [],

        };
    },
    async created() {
        this.item = await getSingleItem(this.$route.params.id);

    },

}
</script>
<template>
    <div class="box">
        <div class="image">
            <img :src="item.image" alt="img">
        </div>
        <div class="info">

            <h3>{{ item.title }}</h3>
            <p class="w3-opacity">
                Created from <span>{{ item.createdFrom }}</span>
            </p>

            <h3>Info</h3>
            <p>
                {{ item.description }}
            </p>

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
}

.box .image {
    width: 50%;
    height: 60vh;
    box-shadow: 5px 5px 10px rgb(80, 138, 115);
    margin-top: 5vh;
}

.image img {
    width: 100%;
    height: 100%;
}

.box .info {

    text-align: center;
    width: 60%;
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

.info span {
    font-size: 1.5rem;
    color: rgb(80, 138, 115);
    font-style: italic;
}

.info :nth-child(3) {
    margin-top: 30px;
    font-size: 1.7rem;
    letter-spacing: 1.5px;
    color: rgb(80, 138, 115);

}

.info :nth-child(4) {
    font-size: 1.4rem;
    font-style: italic;
    margin-top: 30px;

}
</style>