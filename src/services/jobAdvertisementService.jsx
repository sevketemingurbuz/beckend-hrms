import axios from "axios"

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getByAllWithDto")
    }

    add(jobAdvertisement){
        return axios.post('http://localhost:8080/api/jobAdvertisement/add',jobAdvertisement)
    }

    getByCompanyName(companyName){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getByCompanyName?companyName=&{companyName}")
    }

    getAllSorted(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getAllSorted")
    }
    
    findByIsActiveAndOrderByDeadline(isActive){ // yarım çalışmıyorrrrr
        return axios.get("http://localhost:8080/api/jobAdvertisement/findByIsActiveAndOrderByDeadline?isActive=&{isActive}")
    }

    
}