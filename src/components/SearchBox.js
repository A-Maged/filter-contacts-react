import React from 'react';

let SearchBox = (props) => {

	var { filterContacts, typingHandler, term } = props;

	function KeyHandler(event){
		if (event.keyCode === 13 || // enter key
			event.keyCode === 8 ||  // backspace key
			event.keyCode === 46    // delete key
		) filterContacts();
	}

	return(
		<div className="search-box">
			<input 
				onChange={typingHandler}
				onKeyUp={KeyHandler}
				value={term} 
				className="search-box" 
				placeholder="SEARCH CONTACTS BY NAME OR PHONE"
				autoFocus
				type="text"/>
		</div>
	);
}
export default SearchBox