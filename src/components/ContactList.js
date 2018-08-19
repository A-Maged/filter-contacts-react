import React from 'react';

let ContactList = (props) => {
	return(
		<div className="contact-list">
			<h2>{props.name}</h2>
			<h4>{props.phone}</h4>
			<hr />
		</div>
	);
}

export default ContactList;