import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

let ContactsModal = props => {
  let { isOpen, handleCloseModal } = props;
  let selectedContact = props.getSelectedContact();

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="name">
        <span className="label">name:</span>
        <h4>{selectedContact.name}</h4>
      </div>

      <div className="phone">
        <span className="label">phone:</span>
        <h4>{selectedContact.phone}</h4>
      </div>

      <div className="website">
        <span className="label">website:</span>
        <h4>{selectedContact.website}</h4>
      </div>

      <button onClick={handleCloseModal} className="modal-close-btn">
        Close Modal
      </button>
    </ReactModal>
  );
};

export default ContactsModal;
