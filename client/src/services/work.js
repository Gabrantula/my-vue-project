import axios from "axios"


export async function getAllWorks() {
    try {

        const res = await axios.get('http://localhost:3030/data/work')

        return res.data
    }
    catch (err) {
        console.error(err)
    }
}
export async function getSingleItem(id) {
    try {
        const res = await axios.get(`http://localhost:3030/data/work/${id}`)
        return res.data

    }
    catch (err) {
        console.error(err)
        return null
    }
}