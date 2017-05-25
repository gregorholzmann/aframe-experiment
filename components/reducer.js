import * as constants from '../constants/';

AFRAME.registerReducer('citizens', {
  actions: {
    RECEIVE_INITIAL_DATA: constants.RECEIVE_INITIAL_DATA
  },

  initialState: {
    citizens: []
  },

  reducer: function (state, action) {
    state = state || this.initialState;
    switch (action.type) {
      case this.actions.RECEIVE_INITIAL_DATA: {
        return state;
      }
      default: {
        return state;
      }
    }
  }
});