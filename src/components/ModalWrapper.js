import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

let ModalWrapper = props => {
  let { isOpen, handleCloseModal } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      className="modal"
      overlayClassName="modal-overlay"
    >
      {props.children}
    </ReactModal>
  );
};

export default ModalWrapper;
