import * as constants from '../constants';

export const employees = (state = [], action) => {
    switch (action.type) {
        case constants.RECEIVE_INITIAL_DATA:
        let transData = transformReponse(action.data);
            return transData;
        case constants.NEXT_PAGE:
        let nextPage = nextPageCitizens(state);
            return nextPage;
        default:
            return state;
    }
}

export default employees;

function transformReponse(data) {
    let dataClone = _.cloneDeep(data);
    let storeStructure = {
        citizens: data,
        visibileCitizens: _.slice(dataClone, 0, 6),
        visibleSlice: {
            start: 0,
            end: 6
        }
    }
    return storeStructure;
}

function nextPageCitizens(data) {
    let dataClone = _.cloneDeep(data);
    let newStart = dataClone.visibleSlice.start + 6;
    let newEnd = dataClone.visibleSlice.end + 6;
    let nextPageSlice = {
        citizens: dataClone.citizens,
        visibileCitizens: _.slice(dataClone.citizens, newStart, newEnd),
        visibleSlice: {
            start: newStart,
            end: newEnd
        }
    }
    return nextPageSlice;
}
