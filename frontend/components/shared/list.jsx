import React from 'react';
import ListItem from './list-item.jsx';

const List = ({elements, listType}) => {

  let listItems;
  if (elements !== undefined) {
    listItems = elements.map(element => (
      <ListItem key={element.id} id={element.id} element={element} listType={listType} />
    ));
  }

  return (
      <section className="item-list">
        <ul>
          {listItems}
      </ul>
      </section>
  );
};

export default List;
