import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";

import thunk from "redux-thunk";




export default function configureStore() {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer);

    return store;
}