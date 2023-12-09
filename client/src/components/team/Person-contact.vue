
<script>
import PersonCard from './PersonCard.vue';

export default {
    components: { PersonCard }
}
</script>
<template>
    <div class="box">
        <PersonCard />
    </div>
</template>



<style scoped>
.box {
    width: 70vw;
    height: 50vh;
}
</style>