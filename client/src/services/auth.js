import axios from 'axios';

export async function loginUser(userData) {

    try {

        // const res = await axios.post('https://dummyjson.com/auth/login', userData);
        const res = await axios.post('http://localhost:3030/users/login', userData)
        return res.data;
    }
    catch (err) {

        console.error(err);
        alert('Wrong password or email')
        return null;

    }
}

export async function registerUser(userData) {
    try {

        const res = await axios.post('http://localhost:3030/users/register', userData)
        return res.data

    } catch (err) {
        console.error(err)
        return null
    }
}
