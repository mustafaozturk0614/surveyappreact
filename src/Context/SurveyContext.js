import { createContext, useState } from "react";

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
    const [page, setPage] = useState({
        content: [],
        size: 3,
        number: 0
    });
    const [visible, setVisible] = useState(false)
    const [template, setTemplate] = useState({
        title: null,
        description: null,
        isdraft: false,
        questions: [],
        createdDate: null,
        finishDate: null,
        version: null,
        oldVersions: [],
    })
    const [survey, setSurvey] = useState({
        title: 'başlık',
        description: 'text',
        isdraft: false,
        questions: [],
        createdDate: null,
        finishDate: null,
        version: null,
        oldVersions: [],
        sequenceNumber: 0,
    })
    const [courseList, setCourseList] = useState([])
    const [postSurvey, setPostSurvey] = useState({
        template: {

        },
        startTime: null,
        finishTime: null,
        courseid: null,
        sequenceNumber: 0,
        templateUId: null,
    })
    const values = {
        template,
        setTemplate,
        visible,
        setVisible,
        survey
        , setSurvey,
        page,
        setPage,
        postSurvey,
        setPostSurvey
    }
    return (
        <SurveyContext.Provider value={values}>{children} </SurveyContext.Provider>
    )
}
export default SurveyContext