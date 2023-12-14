import axios from "axios"


export async function getAllTeam() {
    try {

        const res = await axios.get('http://localhost:3030/data/team')

        return res.data
    }
    catch (err) {
        console.error(err)
    }
}
export async function getSinglePerson(id) {
    try {
        const res = await axios.get(`http://localhost:3030/data/team/${id}`)
        return res.data

    }
    catch (err) {
        console.error(err)
        return null
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 85bf90df8c05c4fe1779a9fd4c0fa76006318fe8
