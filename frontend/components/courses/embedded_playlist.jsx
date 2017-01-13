import React from 'react';

const EmbeddedPlaylist = ({title, playlistSrc}) => {
  return (
    <section className="embedded-playlist">
      <h2>{title}</h2>
      <iframe width="768" height="432" src={playlistSrc} frameBorder="0" allowFullScreen></iframe>
    </section>
  );
};

export default EmbeddedPlaylist;
