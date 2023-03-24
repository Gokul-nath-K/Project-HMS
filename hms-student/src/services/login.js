import axios from 'axios';

export const loginUser = (user) => {

    return axios.post(`http://localhost:8080/api/students/logincheck`, user);
} 