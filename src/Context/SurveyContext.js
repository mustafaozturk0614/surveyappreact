import { createContext, useState } from "react";

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {


    const [template, setTemplate] = useState({
        title: 'başlık',
        description: 'text',
        isdraft: false,
        questions: [],
        createdDate: null,
        finishDate: null,
        version: null,
        oldVersions: [],
    })

    const values = {
        template,
        setTemplate,
    }
    return (
        <SurveyContext.Provider value={values}>{children} </SurveyContext.Provider>
    )
}
export default SurveyContext