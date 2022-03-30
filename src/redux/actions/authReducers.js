import *as ACTIONS from './ActionsTypes'

const defaultState = {
    isLoggedIn: false,
    email: undefined,

};

const authReducer = (state = { ...defaultState }, action) => {

    switch (action.type) {
        case ACTIONS.LOGOUT_SUCCESS:
            return defaultState
        case ACTIONS.LOGIN_SUCCESS:
            return {
                ...action.payload,
                isLoggedIn: true

            }
        default:
            return state;

    }


};

export default authReducer;