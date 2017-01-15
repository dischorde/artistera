import React from 'react';
import { Link } from 'react-router';

const ListItem = ({element, id, listType}) => {
  return (
    <li>
      <Link to={`/${listType}/${id}`}><img className="cover-img" src={element.cover_img_src}></img></Link>
      <span className="list-item-title"><Link to={`/${listType}/${id}`}>{element.title}</Link></span>
    </li>
  );
};

export default ListItem;
