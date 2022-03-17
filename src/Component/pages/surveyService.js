import axios from "axios"

export default class SurveyService {
    getProducts() {
        return axios.get("http://localhost:8081/getall")
    }

    getByProductId(id) {
        return axios.get("/getById?id=" + id)
    }

}