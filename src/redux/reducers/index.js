import { combineReducers } from "redux";
import questionReducer from "./QuestionReducers"
import templateReducer from "./TemplateReducers";


const rootReducer = combineReducers({

    templateReducer: templateReducer,
    questionReducer: questionReducer
})


export default rootReducer