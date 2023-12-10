<script>
//import { useTeamStore } from '../../pinia-store/teamStore';
import { getAllTeam } from '../../services/team';
//import { mapActions } from 'pinia';
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
    /*  methods: {
          ...mapActions(useTeamStore, ['contact'])
      },*/

};
</script>

<template>
    <!-- Team Section -->
    <div id="team" class="w3-container" style="padding:128px 16px">
        <h3 class="w3-center">
            THE TEAM
        </h3>
        <p class="w3-center w3-large">
            The ones who runs this company
        </p>
        <div class="w3-row-padding w3-grayscale" style="margin-top:64px">
            <PersonCard v-for="person in displayTeam" :key="person.id" :person="person" />
            <!--<PersonCard v-for="person in displayTeam" :key="person.id" :person="person" @on-contact="contact" /> -->
        </div>
    </div>
</template>

<style  scoped></style>
