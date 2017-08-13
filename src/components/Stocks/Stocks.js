import React from 'react';
import {map} from 'lodash/fp';
import {connect} from 'react-redux';
import Stock from './Stock';
import PropTypes from 'prop-types';

let Stocks = ({stocks}) =>
  <div>
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {
          map(stock => <Stock key={stock.symbol} stock={stock}/>, stocks)
        }
      </tbody>
    </table>
  </div>;

Stocks.propTypes = {
  stocks: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const {stocks} = state;
  return ({
    stocks
  });
};

Stocks = connect(mapStateToProps)(Stocks);

export default Stocks;
