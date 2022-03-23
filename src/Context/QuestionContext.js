import { createContext, useState } from "react";
import { convertDateToTimestamp } from '../utils/DateConvert'
import * as Type from '../utils/QuestionTypes'
const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [point, setPoint] = useState(5);
    const [tempQuestion, setTempQuestion] = useState([])
    const [singleQuestion, setSingleQuestion] = useState({
        title: "",
        text: 'text',
        types: Type.TWO_OPTIONS,
        option: [],
        orderNo: 0,

    })

    const [isClick, setIsClick] = useState(
        {
            check: false,
            orderNo: -1,
            types: -1
        }
    )

    const values = {
        singleQuestion,
        setSingleQuestion,
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