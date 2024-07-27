import { INSERT, DELETE, UPDATE } from "./Action";

const initialState = {
    data: [],
    edituser: {}
}
const Reducer = (state = initialState, Action) => {
    switch (Action.type) {
        case INSERT: return {
            ...state,
            data: [...state.data, Action.payload]
        };
        case DELETE: return {
            ...state,
            data: state.data.filter((i) => {
                return i.id != Action.payload
            })
        };
        case UPDATE: return {
            ...state,
            data: state.data.map((i) => {
                return (i.id === Action.payload.id) ? Action.payload.data : i;
            })
            // data: state.data.map((i) => {
            //     if (i.id == Action.payload.id) {
            //         return Action.payload.data
            //     }
            //     else
            //     {
            //         return i;
            //     }
            // })
        }
        default: return state;
    }
}

export default Reducer;














