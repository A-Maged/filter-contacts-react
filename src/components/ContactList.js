import React from 'react';

let ContactList = (props) => {
	var { handleOpenModal, name, phone, index } = props;

	return(
		<div 
			onClick={handleOpenModal.bind(null, index)} 
			className="contact-list">
			<h2>{name}</h2>
			<h4>{phone}</h4>
		</div>
	);
}

export default ContactList;