
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
            console.log(action.payload)
            return {
                ...action.payload,
                types: 1,
                orderNo: state.orderNo + 1




            }

        case ACTIONS.COMMENT:
            return {
                ...action.payload,
                types: 2,
                orderNo: state.orderNo + 1
            }

        case ACTIONS.POİNT:
            return {
                ...action.payload,
                types: 3,
                orderNo: state.orderNo + 1
            }
        case ACTIONS.EDİT:
            return {
                ...action.payload,
                isClikc: true

            }



        default:
            return state;

    }


};

export default questionReducer;