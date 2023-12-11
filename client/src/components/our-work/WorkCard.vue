<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
            default: () => ({
                image: "/pic/ourWork/christin-hume-Hcfwew744z4-unsplash.jpg",
                title: "DEFAULT",
                createdFrom: 'DEFAULT',
                description: "DEFAULT",
                id: "-3"
            })
        }
    },
}
</script>
<template>
    <router-link :to="{ name: 'work-info', params: { id: item.id } }" class="w3-col l3 m6">
        <img :src="item.image" style="width:100%" class="w3-hover-opacity" alt="img">
    </router-link>
</template>



<style scoped>
.w3-col {
    margin-bottom: 20px;
}
</style>