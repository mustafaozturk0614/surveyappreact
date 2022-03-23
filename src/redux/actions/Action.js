import * as ACTIONS from "./ActionsTypes"


export const addBoolen = (question) => {

    return {
        type: ACTIONS.BOOLENTYPE,
        payload: question
    };
};

export const addComment = (question) => {

    return {
        type: ACTIONS.COMMENT,
        payload: question
    };
};

export const addPoint = (question) => {

    return {
        type: ACTIONS.POİNT,
        payload: question
    };
};


export const saveTemplate = (template) => {

    return {
        type: ACTIONS.SAVETEMPLATE,
        payload: template
    };
};

export const edit = (question) => {
    return {
        type: ACTIONS.EDİT,
        payload: question

    }

}
export const addQuestion = (question) => {
    return {
        type: ACTIONS.ADDqUESTİON,
        payload: question

    }

}