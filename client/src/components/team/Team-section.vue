<script>

import { getAllTeam } from '../../services/team';
import PersonCard from './PersonCard.vue';

export default {
    components: { PersonCard },
    data() {
        return {
            team: [],
        };
    },
    computed: {
        displayTeam() {
            return this.team
        }
    },
    async created() {
        const promis = await Promise.all([getAllTeam(), []]);
        this.team = promis[0];
    },
};
</script>

<template>
    <!-- Team Section -->
    <div id="team" class="w3-container">
        <h3 class="w3-center">
            THE TEAM
        </h3>
        <p class="w3-center w3-large">
            The ones who runs this company
        </p>
        <div class="w3-row-padding w3-grayscale">
            <PersonCard v-for="person in displayTeam" :key="person.id" :person="person" />
        </div>
    </div>
</template>

<style  scoped>
#team {
    padding: 128px 16px;
}

.w3-grayscale {
    margin-top: 64px;
}
</style>
