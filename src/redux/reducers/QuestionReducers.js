
import *as ACTIONS from '../actions/ActionsTypes'
const defaultState =

{

    title: 'başlık',
    text: 'text',
    types: null,
    option: [],
    orderNo: 0,

}


const questionReducer = (state = { ...defaultState }, action) => {

    switch (action.type) {

        case ACTIONS.BOOLENTYPE:
            return {
                ...action.payload,
                types: 1,




            }

        case ACTIONS.COMMENT:
            return {
                ...action.payload,
                types: 2,
            }

        case ACTIONS.POİNT:
            return {
                ...action.payload,
                types: 3,
            }
        case ACTIONS.EDİT:
            return {
                ...action.payload,

            }



        default:
            return state;

    }


};

export default questionReducer;