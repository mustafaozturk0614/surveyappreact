import { createContext, useState } from "react";


const QuestionContext = createContext();



export const QuestionProvider = ({ children }) => {

    const [point, setPoint] = useState(5);

    const [singleQuestion, setSingleQuestion] = useState({

        title: "",
        text: 'text',
        types: 1,
        option: [],
        orderNo: 0,

    })
    const [count, setCount] = useState(0)

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
        setIsClick,
        count,
        setCount,
        point,
        setPoint
    }

    return (
        <QuestionContext.Provider value={values}>{children} </QuestionContext.Provider>
    )
}
export default QuestionContext