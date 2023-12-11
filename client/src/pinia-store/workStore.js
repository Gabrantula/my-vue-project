import { defineStore } from "pinia";


export const useTeamStore = defineStore('work', {
    state: () => ({

        ourWork: []
    }),
    getters: {
        getOurWork: (state) => {
            //??
            let itemId

            return itemId = state.ourWork.find(item => item.id === itemId)
        }
    },

})