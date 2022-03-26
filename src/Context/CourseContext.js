import { createContext, useState } from "react";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {


    const [visible, setVisible] = useState(false)
    const [course, setCourse] = useState({
        name: '',
        masterTrainerId: '',
        assistantTrainer: '',
        survey: [],
        teacher: [],
        student: [],
        createdDate: null,
        finishDate: null,


    })
    const [courseList, setCourseList] = useState()

    const values = {
        course,
        setCourse,
        courseList, setCourseList

    }
    return (
        <CourseContext.Provider value={values}>{children} </CourseContext.Provider>
    )
}
export default CourseContext