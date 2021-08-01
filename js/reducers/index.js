import { BURN } from "../actions/index.js";

const reducer = (state, action) => {
    switch (action.type) {
        case BURN:
            return state + action.payload
            break;

        default:
            return state;
    }
}

export default reducer