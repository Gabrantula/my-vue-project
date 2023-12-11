
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
            <img :src="item.image" alt="img" style="width:100%">
        </div>
        <div class="info">

            <h3>{{ item.title }}</h3>
            <p class="w3-opacity">
                Created from {{ item.createdFrom }}
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