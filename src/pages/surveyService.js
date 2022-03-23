import axios from "axios"

export default class SurveyService {
    getTemplates(page = 0, size = 5) {
        console.log("b")
        return axios.get(`/getall?page=${page}&size=${size}`)
    }

    getBySurveyId(id) {
        return axios.get("/getById?id=" + id)
    }

}


