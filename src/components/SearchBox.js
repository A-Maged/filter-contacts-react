import React from 'react';

let SearchBox = (props) => {

	function KeyHandler(event){
		if (event.keyCode === 13 || // enter key
			event.keyCode === 8 ||  // backspace key
			event.keyCode === 46    // delete key
		) props.filterContacts();
	}

	return(
		<div className="search-box">
			<input 
				onChange={props.typingHandler}
				onKeyUp={KeyHandler}
				value={props.term} 
				className="search-box" 
				placeholder="SEARCH CONTACTS BY NAME OR PHONE"
				autoFocus
				type="text"/>
		</div>
	);
}
export default SearchBox