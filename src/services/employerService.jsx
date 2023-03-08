import axios from "axios";

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employer/getAll")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/employer/getById?id=" + id)
    }
}