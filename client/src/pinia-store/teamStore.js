import { defineStore } from "pinia";


export const useTeamStore = defineStore('team', {
    state: () => ({

        team: []
    }),
    getters: {
        getPerson: (state) => {
            //??
            let personId

            return personId = state.team.find(person => person.id === personId)
        }
    },

})

