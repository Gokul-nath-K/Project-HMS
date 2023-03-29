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

export const getAttendance = (admincode) => {

    return axios.get(ATTENDANCE_API_BASE_URL + '/getattendance/' + admincode)
}

export const postAttendance = (attendance) => {

    return axios.post(ATTENDANCE_API_BASE_URL + '/postattendance', attendance);
}

export const getSOS = () => {

    return axios.get(`http://localhost:8080/api/admin/sosrequest`)
}

export const getAttByDate = (date, id) => {

    return axios.get(`${ATTENDANCE_API_BASE_URL}/history/` + date + `/` + id);
}

export const studentCount = (adminCode) => {

    return axios.get(`${ATTENDANCE_API_BASE_URL}/studentscount/` + adminCode);
}

export const outpassCount = (adminCode) => {

    return axios.get(`${ATTENDANCE_API_BASE_URL}/outpasscount/` + adminCode);
}

export const complainCount = (adminCode) => {

    return axios.get(`${ATTENDANCE_API_BASE_URL}/complaintscount/` + adminCode);
}

export const sosCount = (adminCode) => {

    return axios.get(`${ATTENDANCE_API_BASE_URL}/soscount/` + adminCode);
}

export const updateComplaint = (status, id) => {
    return axios.put(ATTENDANCE_API_BASE_URL + '/complaint?status=' + status + '&id=' + id);
}

export const getPendingComplaints = (block) => {
    return axios.get(ATTENDANCE_API_BASE_URL + '/sortbypending/' + block);
}

export const getComplaintsHistory = (block) => {
    return axios.get(ATTENDANCE_API_BASE_URL + '/sortbyview/' + block);
}

export const getAllComplaints = (block) => {
    return axios.get(ATTENDANCE_API_BASE_URL + '/sortbyview/' + block);
}

export const getAllSoss = () => {
    return axios.get(ATTENDANCE_API_BASE_URL + '/sosrequest');
}