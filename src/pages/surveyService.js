import axios from "axios"

export default class SurveyService {
    getTemplates(page = 0, size = 6) {

        return axios.get(`/getall?page=${page}&size=${size}`)
    }

    getBySurveyId(id) {
        return axios.get("/getById?id=" + id)
    }
    deleteById(id) {
        console.log('a')
        return axios.delete("/delete?id=" + id)

    }
    updateById(id, body) {
        console.log('a')
        return axios.put("/update?id=" + id, body)

    }
    findByTitle(title) {
        console.log('a')
        return axios.get("/findbytitle?title=" + title)

    }

    createSurvey(survey) {
        console.log('a')
        return axios.post("http://localhost:8081/surveycreate", survey)

    }
    getSurveys() {
        console.log('a')
        return axios.get("http://localhost:8081/getAllsurvey")

    }
    getquestionBySurveyId(id) {
        return axios.get("/question/findbytemplate?id=" + id)
    }

}


