import *as ACTIONS from '../actions/ActionsTypes'
const survey =

{

    title: 'başlık',
    description: 'text',
    isdraft: false,
    questionss: [],

}


const templateReducer = (state = { ...survey }, action) => {

    switch (action.type) {

        case ACTIONS.SAVETEMPLATE:
            console.log(action)
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