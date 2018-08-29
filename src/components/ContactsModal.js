import React from 'react';
import ModalWrapper from './ModalWrapper';

let ContactsModal = props => {
  let selectedContact = props.getSelectedContact();

  return (
    <ModalWrapper
      isOpen={props.isOpen}
      handleCloseModal={props.handleCloseModal}
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

      <button onClick={props.handleCloseModal} className="modal-close-btn">
        Close Modal
      </button>
    </ModalWrapper>
  );
};

export default ContactsModal;
