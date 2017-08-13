import React from 'react';
import {connect} from 'react-redux';
import {searchStocks} from './SearchActions';
import PropTypes from 'prop-types';

let Search = ({searchStocks}) => {
  let searchInput;
  return (
    <div>
      <input type="text" onChange={() => searchStocks(searchInput.value)} ref={input => searchInput = input}/>
    </div>
  );
};

Search.propTypes = {
  searchStocks: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  searchStocks: term => dispatch(searchStocks(term))
});

Search = connect(null, mapDispatchToProps)(Search);

export default Search;
