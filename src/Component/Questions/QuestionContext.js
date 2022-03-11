import { createContext, useState } from "react";


const QuestionContext = createContext();



export const QuestionProvider = ({ children }) => {

    const [singleQuestion, setSingleQuestion] = useState({

        types: 1,
        option: [],

    })


    const [isClick, setIsClick] = useState(
        {
            check: false,
            orderNo: -1,
            types: -1

        }


    )


    const [template, setTemplate] = useState({



        title: 'başlık',
        description: 'text',
        isdraft: false,
        questions: [],


    })

    const [tempQuestion, setTempQuestion] = useState([])




    const values = {

        singleQuestion,
        setSingleQuestion,
        template,
        setTemplate,
        tempQuestion,
        setTempQuestion,
        isClick,
        setIsClick
    }

    return (
        <QuestionContext.Provider value={values}>{children} </QuestionContext.Provider>
    )
}
export default QuestionContext