import axios from "axios"

export default class CourseService {
    getCourses() {

        return axios.get(`http://localhost:8082/course/getall`)
    }

    getByName(name) {

        return axios.get(`http://localhost:8082/course/findbyname?name=` + name)
    }
    getByTeacher(id) {

        return axios.get(`http://localhost:8082/teacher/id?id=` + id)
    }
    getByTeacherCourseName(name) {

        return axios.get(`http://teacher/getbycoursename?name=` + name)
    }

}


