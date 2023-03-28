import axios from 'axios';


const ATTENDANCE_API_BASE_URL = "http://localhost:8080/api/admin";


export const getPendingOutpasses = (status) => {
    return axios.get(ATTENDANCE_API_BASE_URL + '/getallpendingoutpass?status=' + status);
}

export const getAllOutpasses = (status) => {
    return axios.get(ATTENDANCE_API_BASE_URL + '/getalloutpass?status=' + status);
}

export const updateOutpasses = (status, id) => {
    return axios.put(ATTENDANCE_API_BASE_URL + '/updateoutpass?status=' + status + '&id=' + id);
}

export const loginUser = (user) => {

    return axios.post(`http://localhost:8080/api/admin/logincheck`, user);
}

export const getAdmin = (admincode) => {

    return axios.get(ATTENDANCE_API_BASE_URL + '/get/' + admincode)
}

export const getSOS = () => {

    return axios.get(`http://localhost:8080/api/admin/sosrequest`)
}
