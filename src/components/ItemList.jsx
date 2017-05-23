import React from 'react';
import propTypes from 'prop-types';

const ItemList = ({ items }) => {
  const itemList = items ? items.map(item => <li key={item.id}>{item.name}</li>) : null;
  return (
    <ul>
      {itemList}
    </ul>
  );
};

ItemList.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired
};

export default ItemList;
