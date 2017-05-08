import { getData } from '../services/data-fetch';
import * as constants from '../constants/';

export function bootstrap() {
    return function(dispatch) {
        return getData()
        .then(response => {
            dispatch(receiveInitialData(response));
        })
    }
}

// Helper Functions

function receiveInitialData(data) {
	return {
		type: constants.RECEIVE_INITIAL_DATA,
		data:data
	}
}