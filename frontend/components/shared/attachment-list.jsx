import React from 'react';

const AttachmentList = ({attachments, deleteable, deleteAttachment}) => {
  const deleteButton = (id) => {
      if (!deleteable) {
        return null;
      }

      return (
        <button className="delete-attachment" onClick={e => deleteAttachment(id)} alt="delete attachment"></button>
      );
  };

  let listItems = attachments.map((attachment, i) => (
      <li key={i} className="attachment-li">
        <span className="delete"><a href={attachment.file_src}>{attachment.file_name}</a>
        {deleteButton(attachment.id)}
        </span>
        <br />
        <div className="attachment-file-size">{attachment.file_size}</div>
      </li>

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
