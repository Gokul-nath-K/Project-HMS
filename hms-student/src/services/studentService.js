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

export const postOutpass = (outpass) => {

    return axios.post(`http://localhost:8080/api/students/outpass`, outpass)
}

export const getAnnouncement = () => {

    return axios.get(`http://localhost:8080/api/students/announcement`)
}

export const getPercentage = (rollno) => {

    return axios.get(`http://localhost:8080/api/students/getpercentage/` + rollno);
}

export const getOutpassHistory = (rollno) => {

    return axios.get(`http://localhost:8080/api/students/outpasshistory/` + rollno);
}

export const getComplaintHistory = (rollno) => {
    
    return axios.get(`http://localhost:8080/api/students/complainthistory/` + rollno);
}