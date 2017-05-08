import * as constants from '../constants';
import { bootstrap } from '../actions'

export const employees = (state = [], action) => {
    switch (action.type) {
        case constants.RECEIVE_INITIAL_DATA:
            return action.data;
        default:
            return state;
    }
}

export default employees;