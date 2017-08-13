import React from 'react';
import PropTypes from 'prop-types';

const Stock = ({stock}) =>
  <tr>
    <td>
      {stock.symbol}
    </td>
    <td>
      {stock.name}
    </td>
    <td>
      {stock.price}
    </td>
    <td>
      {stock.change}
    </td>
  </tr>;

Stock.propTypes = {
  stock: PropTypes.object.isRequired
};

export default Stock;
