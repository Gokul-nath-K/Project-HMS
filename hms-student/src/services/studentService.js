import axios from "axios";

export const getStudent = (rollno) => {

    return axios.get(`http://localhost:8080/api/students/get/` + rollno)
}

export const postSOS = (sosdata) => {

    return axios.post(`http://localhost:8080/api/students/SOS`, sosdata)
}

export const postComplains = (complains) => {

    return axios.post(`http://localhost:8080/api/students/complaint`, complains)
}