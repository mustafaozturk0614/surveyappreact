import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import SecureLS from "secure-ls";
import thunk from "redux-thunk";
import authReducer from "../actions/authReducers";





const secureLs = new SecureLS();
const getStateFromStorage = () => {
    const authData = secureLs.get('survey-aut');
    let stateInlocalStorege = {
        isLoggedIn: false,
        email: undefined,
        password: undefined,

    }
    if (authData) {
        try {
            stateInlocalStorege = authData
        } catch (error) {
        }
    }

    return stateInlocalStorege;
}
const updateStateInStorage = newState => {
    secureLs.set('survey-aut', newState)

}


const configureStore = () => {
    const initialState = getStateFromStorage()

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(authReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
    store.subscribe(() => {
        updateStateInStorage(store.getState())

    })
    return store;
}
export default configureStore