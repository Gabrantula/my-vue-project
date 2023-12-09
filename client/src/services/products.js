import axios from "axios"


export async function getAllProducts() {
    try {
        // const res = await axios.get('https://dummyjson.com/products')
        //const res = await axios.get('https://fakestoreapi.com/products')
        const res = await axios.get('http://localhost:3030/data/cards')
        return res.data
    }
    catch (err) {
        console.error(err)
    }
}

export async function getProduct(id) {
    try {
        const res = await axios.get(`http://localhost:3030/data/cards/${id}`)
        return res.data

    }
    catch (err) {
        console.error(err)
        return null
    }
}