<script>
import { useTeamStore } from '../../pinia-store/teamStore';
import { getAllTeam } from '../../services/team';
import { mapActions } from 'pinia';
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
    methods: {
        ...mapActions(useTeamStore, ['contact'])
    },

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
            <PersonCard v-for="person in displayTeam" :key="person.id" :person="person" @on-contact="contact" />
            <!-- 
    <div class="w3-col l3 m6 w3-margin-bottom">
                <div class="w3-card">
                    <img src="/pic/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg" alt="John" style="width:100%">
                    <div class="w3-container">
                        <h3>John Doe</h3>
                        <p class="w3-opacity">
                            CEO & Founder
                        </p>
                        <p>
                            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                        </p>
                        <p>
                            <button class="w3-button w3-light-grey w3-block">
                                <i class="fa fa-envelope" /> Contact
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
                <div class="w3-card">
                    <img src="/pic/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="Jane" style="width:100%">
                    <div class="w3-container">
                        <h3>Anja Doe</h3>
                        <p class="w3-opacity">
                            Art Director
                        </p>
                        <p>
                            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                        </p>
                        <p>
                            <button class="w3-button w3-light-grey w3-block">
                                <i class="fa fa-envelope" /> Contact
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
                <div class="w3-card">
                    <img src="/pic/jurica-koletic-7YVZYZeITc8-unsplash.jpg" alt="Mike" style="width:100%">
                    <div class="w3-container">
                        <h3>Mike Ross</h3>
                        <p class="w3-opacity">
                            Web Designer
                        </p>
                        <p>
                            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                        </p>
                        <p>
                            <button class="w3-button w3-light-grey w3-block">
                                <i class="fa fa-envelope" /> Contact
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
                <div class="w3-card">
                    <img src="/pic/tamara-bellis-eDVQwVMLMgU-unsplash.jpg" alt="Alex" style="width:100%">
                    <div class="w3-container">
                        <h3>Alex Star</h3>
                        <p class="w3-opacity">
                            Designer
                        </p>
                        <p>
                            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                        </p>
                        <p>
                            <button class="w3-button w3-light-grey w3-block">
                                <i class="fa fa-envelope" /> Contact
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            -->

        </div>
    </div>
</template>

<style lang="scss" scoped></style>
