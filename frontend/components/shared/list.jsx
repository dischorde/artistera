import React from 'react';
import ListItem from './list-item.jsx';

const List = ({elements, listType}) => {
  const listItems = elements.map(element => (
    <ListItem key={element.id} id={element.id} element={element} listType={listType} />
  ));

  // TODO: Remove fake classes here for styling
  return (
      <section className="item-list">
        <ul>
          {listItems}
          <li><a href="#/courses/1"><img className="cover-img" src="https://images.unsplash.com/photo-1448361166128-5bb2fdfab84c?dpr=1&amp;auto=format&amp;fit=crop&amp;w=250&amp;q=80&amp;cs=tinysrgb" /></a><span className="list-item-title"><a href="#/courses/1">Pointed Pen Calligraphy 101</a></span></li><li><a href="#/courses/2"><img className="cover-img" src="https://images.unsplash.com/photo-1437750769465-301382cdf094?dpr=1&amp;auto=format&amp;fit=crop&amp;w=250&amp;q=80&amp;cs=tinysrgb" /></a><span className="list-item-title"><a href="#/courses/2">Modern Brush Calligraphy and Hand Lettering</a></span></li>
        </ul>
      </section>
  );
};

export default List;
