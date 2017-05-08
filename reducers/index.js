import * as constants from '../constants';

export const employees = (state = [], action) => {
    switch (action.type) {
        case constants.RECEIVE_INITIAL_DATA:
            return action.data;
        default:
            return state;
    }
}

export default employees;