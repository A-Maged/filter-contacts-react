import React from 'react';

let ContactList = (props) => {
	return(
		<div 
			onClick={props.handleOpenModal.bind(null, props.index)} 
			className="contact-list">
			<h2>{props.name}</h2>
			<h4>{props.phone}</h4>
		</div>
	);
}

export default ContactList;