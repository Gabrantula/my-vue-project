
<script>
import PersonCard from './PersonCard.vue';



export default {
    props: {
        person: {}
    },
    components: { PersonCard }
}
</script>
<template>
    <div class="box">
        <div class="image">
            <PersonCard />
        </div>
        <div class="info">

        </div>
    </div>
</template>



<style scoped>
.box {
    width: 70vw;
    height: 50vh;
}
</style>