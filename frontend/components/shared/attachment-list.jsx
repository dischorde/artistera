import React from 'react';

class AttachmentList extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    const {attachments, deleteable, deleteAttachment} = this.props;
    const deleteButton = (id) => {
        if (!deleteable) {
          return null;
        }
        return (
          <button className="delete-attachment" onClick={e => deleteAttachment(id)} alt="delete attachment"></button>
        );
    };

    let listItems;
    if (attachments) {
      listItems = attachments.map((attachment, i) => (
          <li key={i} className="attachment-li">
            <span className="delete"><a href={attachment.file_src}>{attachment.file_name}</a>
            {deleteButton(attachment.id)}
            </span>
            <br />
            <div className="attachment-file-size">{attachment.file_size}</div>
          </li>
        ));
    }

    return (
      <section className="attachment-list-wrapper">
          <h3>Attached Files</h3>
          <ul className="attachment-list">
            {listItems}
          </ul>
      </section>
    );
  }
}

export default AttachmentList;
