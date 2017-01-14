import React from 'react';

const AttachmentList = ({attachments}) => {
  // let attachments = props.attachments || []
  let listItems = attachments.map((attachment, i) => (
      <li key={i} className="attachment-li"><a href={attachment.file_src}>{attachment.filename}</a></li>
  ));

  return (
    <section className="attachment-list-wrapper">
        <h3>Attached Files</h3>
        <ul className="attachment-list">
          {listItems}
        </ul>
    </section>
  );
};

export default AttachmentList;
