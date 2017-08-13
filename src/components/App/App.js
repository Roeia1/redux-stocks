import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Search from '../Search/Search';
import Stocks from '../Stocks/Stocks';


let App = ({isNetworkOn}) => {
  return (
    <div>
      <h2>Kickstart Stocks</h2>
      <div style={{display: 'inline-block', width: '20px', height: '20px', backgroundColor: isNetworkOn ? 'green' : 'red'}}/>
      <Search/>
      <Stocks/>
    </div>
  );
};

App.propTypes = {
  isNetworkOn: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const {isNetworkOn} = state;
  return ({
    isNetworkOn
  });
};

const mapDispatchToProps = (dispatch, getState) => {

};

App = connect(mapStateToProps)(App);

export default App;
