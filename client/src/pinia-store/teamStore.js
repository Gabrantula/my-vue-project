import { defineStore } from "pinia";


export const useTeamStore = defineStore('team', {
    state: () => ({

        team: []
    }),
    getters: {
        getPerson: (state) => {
<<<<<<< HEAD
            //??
            let personId

            return personId = state.team.find(person => person.id === personId)
        }
    },
    /*
        actions: {
            contact(id) {
                const currPerson = this.team.find(person => person.id === id)
                return currPerson
            }
        }*/
})
=======
              //??
            let personId
            return personId = state.team.find(person => person.id === personId)
        }
    },
    //??
    actions: {
        contact(id) {
            const currPerson = this.team.find(person => person.id === id)
            return currPerson
        }
    }
})
>>>>>>> 85bf90df8c05c4fe1779a9fd4c0fa76006318fe8
