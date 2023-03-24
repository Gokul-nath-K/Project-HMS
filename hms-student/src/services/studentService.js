import axios from "axios";

export const getStudent = (rollno) => {

    console.log(rollno);
    return axios.get(`http://localhost:8080/api/students/get/` + rollno)
}