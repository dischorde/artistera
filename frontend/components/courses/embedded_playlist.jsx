import React from 'react';

const EmbeddedPlaylist = ({title, playlistSrc}) => {
  return (
    <section className="embedded-playlist">
      <h2>{title}</h2>
      <iframe width="640" height="360" src={playlistSrc} frameBorder="0" allowFullScreen></iframe>
    </section>
  );
};

export default EmbeddedPlaylist;
