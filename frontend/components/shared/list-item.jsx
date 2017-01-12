import React from 'react';
import { Link } from 'react-router';

const ListItem = ({element, id, listType}) => {
  // TODO: remember to add the cover_img_src to the JSON from the cover image ruby paperclip helper method
  return (
    <li>
      <Link to={`/${listType}/${id}`}><img className="cover-img" src={element.cover_img_src}></img></Link>
      <span className="list-item-title"><Link to={`/${listType}/${id}`}>{element.title}</Link></span>
    </li>
  );
};

export default ListItem;
