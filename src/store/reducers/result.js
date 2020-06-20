import * as actionTypes from '../actions';

const initialState = {
    results: [],
    value:null,
    header: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            const updatedArr = state.results.filter((result, index) => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArr
            }
        case actionTypes.TITLE_ACTION:
            return {
                ...state,
                value:"fuck"
            }

        case actionTypes.HEADER_ACTION:
            return {
                ...state,
                header:action.rrr
            }

    }
    return state;
}

export default reducer;
