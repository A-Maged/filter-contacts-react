import React from 'react';

let ContactCard = (props) => {
	let { handleOpenModal, name, phone, index } = props;

	return(
		<div 
			onClick={handleOpenModal.bind(null, index)} 
			className="contact-card">
			<h2>{name}</h2>
			<h4>{phone}</h4>
		</div>
	);
}

export default ContactCard;