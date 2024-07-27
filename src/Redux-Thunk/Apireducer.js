import { FAILURE, GETDATA, SUCCESS } from './Action';

const initialState = {
    data: [],
    isApiCall: false,
    error: ""
}
const Apireducer = (state = initialState, Action) => {
    switch (Action.type) {
        case GETDATA: return {
            ...state,
            isApiCall: true, error: ""
        }
        case SUCCESS: return {
            ...state,
            data: Action.payload,
            isApiCall: false, error: ""
        }
        case FAILURE: return {
            ...state,
            error: Action.payload,
            isApiCall: false, error: ""
        }

        default: return state;
    }
}

export default Apireducer