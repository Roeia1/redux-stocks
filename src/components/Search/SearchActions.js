import StocksServer from '../StocksServer/StocksServer';
import {SET_STOCKS, SET_NETWORK_OFF, SET_NETWORK_ON} from './SearchActionTypes';

export const setStocks = stocks => ({type: SET_STOCKS, stocks});

export const setNetworkOn = () => ({type: SET_NETWORK_ON});

export const setNetworkOff = () => ({type: SET_NETWORK_OFF});

export const searchStocks = term => dispatch => {
  if (term === '') {
    dispatch(setStocks([]));
  } else {
    dispatch(setNetworkOn());
    StocksServer.searchStocks(term).then(stocks => {
      dispatch(setNetworkOff());
      dispatch(setStocks(stocks));
    });
  }
};
