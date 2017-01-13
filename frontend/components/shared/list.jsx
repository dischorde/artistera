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
          <li><a href="#/courses/1"><img className="cover-img" src="https://images.unsplash.com/photo-1448361166128-5bb2fdfab84c?dpr=1&auto=compress,format&fit=crop&w=376&h=251&q=80&cs=tinysrgb&crop=" /></a><span className="list-item-title"><a href="#/courses/1">Pointed Pen Calligraphy 101</a></span></li><li><a href="#/courses/2"><img className="cover-img" src="https://images.unsplash.com/photo-1437750769465-301382cdf094?dpr=1&auto=compress,format&fit=crop&w=376&h=251&q=80&cs=tinysrgb&crop=" /></a><span className="list-item-title"><a href="#/courses/2">Modern Brush Calligraphy and Hand Lettering</a></span></li>
          <li><a href="#/courses/3"><img className="cover-img" src="https://images.unsplash.com/photo-1470836047270-6c7c229fd74b?dpr=1&auto=compress,format&fit=crop&w=376&h=251&q=80&cs=tinysrgb&crop=" /></a><span className="list-item-title"><a href="#/courses/3">A Last Example Course</a></span></li>
      </ul>
      </section>
  );
};

export default List;
