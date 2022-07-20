import {GET_PAYMENT_HISTORY} from './../types';
const initialState = {
    payhistory: []
}

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PAYMENT_HISTORY:
            return {
                ...state,
                payhistory: action.payload
            }
        default:
            return state;
    }
}
export default historyReducer;



