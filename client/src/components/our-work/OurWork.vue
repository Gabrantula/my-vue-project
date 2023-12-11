<script>
import { getAllWorks } from '../../services/work';
import WorkCard from './WorkCard.vue';

export default {
    components: { WorkCard },
    data() {
        return {
            work: [],
        };
    },
    computed: {
        displayWork() {
            return this.work
        }
    },
    async created() {
        const promis = await Promise.all([getAllWorks(), []]);
        this.work = promis[0];
    },
};
</script>

<template>
    <!-- Work Section -->
    <div id="work" class="w3-container" style="padding:128px 16px">
        <h3 class="w3-center">
            OUR WORK
        </h3>
        <p class="w3-center w3-large">
            What we've done for people
        </p>

        <div class="w3-row-padding" style="margin-top:64px">
            <WorkCard v-for="item in displayWork" :key="item.id" :item="item" />
        </div>
        <!-- 
  <div class="w3-row-padding" style="margin-top:64px">
            <div class="w3-col l3 m6">
                <img src="/pic/ourWork/christin-hume-Hcfwew744z4-unsplash.jpg" style="width:100%" onclick="onClick(this)"
                    class="w3-hover-opacity" alt="A laptop">
            </div>
            <div class="w3-col l3 m6">
                <img src="/pic/ourWork/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg" style="width:100%" onclick="onClick(this)"
                    class="w3-hover-opacity" alt="A project">
            </div>
            <div class="w3-col l3 m6">
                <img src="/pic/ourWork/priscilla-du-preez-BjhUu6BpUZA-unsplash.jpg" style="width:100%"
                    onclick="onClick(this)" class="w3-hover-opacity" alt="A phone">
            </div>
            <div class="w3-col l3 m6">
                <img src="/pic/ourWork/david-henrichs-72AYEEBJpz4-unsplash.jpg" style="width:100%" onclick="onClick(this)"
                    class="w3-hover-opacity" alt="a drone">
            </div>
        </div>

        <div class="w3-row-padding w3-section">
            <div class="w3-col l3 m6">
                <img src="/pic/ourWork/nordwood-themes-F3Dde_9thd8-unsplash.jpg" style="width:100%" onclick="onClick(this)"
                    class="w3-hover-opacity" alt="A camera">
            </div>
            <div class="w3-col l3 m6">
                <img src="/pic/ourWork/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg" style="width:100%"
                    onclick="onClick(this)" class="w3-hover-opacity" alt="A work">
            </div>
            <div class="w3-col l3 m6">
                <img src="/pic/ourWork/matt-botsford-OKLqGsCT8qs-unsplash.jpg" style="width:100%" onclick="onClick(this)"
                    class="w3-hover-opacity" alt="A microphone">
            </div>
            <div class="w3-col l3 m6">
                <img src="/pic/ourWork/eric-nopanen-8e0EHPUx3Mo-unsplash.jpg" style="width:100%" onclick="onClick(this)"
                    class="w3-hover-opacity" alt="A music">
            </div>
        </div>
-->

    </div>
    <!-- Modal for full size images on click -->
    <!-- 
  <div id="modal01" class="w3-modal w3-black" onClick="this.style.display = 'none'">
        <span class="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright" title="Close Modal Image">×</span>
        <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
            <img id="img01" class="w3-image">
            <p id="caption" class="w3-opacity w3-large" />
        </div>
    </div>
    -->
</template>

<style  scoped></style>
