import { INCREMENT, DECREMENT } from "./Action";

const initialState = {
    count: 0
}

const CounterReducer = (state = initialState, Action) => {
    switch (Action.type) {
        case INCREMENT: return { ...state, count: state.count + 1 }
        case DECREMENT: return { ...state, count: state.count - 1 }
        default: return state;
    }
}
export default CounterReducer