import axios from 'axios';

export async function loginUser(userData) {
    try {
        //  const config = { 'Content-Type': 'application/json' }
        // const res = await axios.post('https://dummyjson.com/auth/login', userData);
        const res = await axios.post('http://localhost:3030/users/login', userData)
        // const res = await axios.post('https://fakestoreapi.com/auth/login', userData)
        console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export async function registerUser(userData) {
    try {
        // const config = { 'Content-Type': 'application/json' }
        //const res = await axios.post('https://fakestoreapi.com/users', userData)
        const res = await axios.post('http://localhost:3030/users/register', userData)
        console.log(res);
        return res.data
    } catch (err) {
        console.error(err)
        return null
    }
}
