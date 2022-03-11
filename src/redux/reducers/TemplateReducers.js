import *as ACTIONS from '../actions/ActionsTypes'
const initialState =

{

    title: 'başlık',
    description: 'text',
    isdraft: false,
    questionss: [],

}


const templateReducer = (state = { ...initialState }, action) => {

    switch (action.type) {

        case ACTIONS.SAVETEMPLATE:
            return {
                ...action.payload,


            }
        case ACTIONS.ADDqUESTİON:
            return {
                ...action.payload,


            }
        default:
            return state;




    };
}
export default templateReducer;