import {SET_STOCKS, SET_NETWORK_OFF, SET_NETWORK_ON} from './SearchActionTypes';

const defaultState = {
  stocks: [],
  isNetworkOn: false
};

const SearchReducer = (state = defaultState, action) => {
  const {type, stocks} = action;
  switch (type) {
    case SET_STOCKS: {
      return {
        ...state,
        stocks};
    }
    case SET_NETWORK_ON: {
      return {
        ...state,
        isNetworkOn: true
      };
    }
    case SET_NETWORK_OFF: {
      return {
        ...state,
        isNetworkOn: false
      };
    }
    default: {
      console.log('unknown action');
      return state;
    }
  }

};

export default SearchReducer;
