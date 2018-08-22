import React, { Component } from 'react';
import uniqid from 'uniqid';
// import Transition from 'react-transition-group/Transition';

import './App.css';
import contactsData from './data/contacts';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';
import ContactsModal from './components/ContactsModal';


export default class App extends Component {
	constructor(){
		super();

		this.state = {
			showModal: false,
			search: {
				term: '',
				matchedContacts: [],
			},
			selectedContactIndex: null,
			allContacts: contactsData
		};
	}

	render() {
		return (
			<div className="App" >
				
				<div className="header">

					<SearchBox
						typingHandler={this.typingHandler} 
						filterContacts={this.filterContacts}
						term={this.state.search.term} />

					{/* <button className="add-btn">+</button> */}
				</div>

				{this.renderContactsList()}

				{this.state.search.matchedContacts.length === 0 && 
				 this.state.search.term.length > 0 &&
				 <div className="no-match">no match</div>}

				
				{this.state.showModal &&
				 /* using "!== null" instead of "+ 1" because zero-index is falsy 
						and won't fire modal for first element in array */
				 this.state.selectedContactIndex !== null  &&
				 <ContactsModal 
					isOpen={this.state.showModal}				
					handleCloseModal={this.handleCloseModal} 
					getSelectedContact={this.getSelectedContact}
				/>}
			</div>
		);
	}
	
	getSelectedContact = () => {
		if (this.state.search.matchedContacts.length === 0) {
			return this.state.allContacts[this.state.selectedContactIndex]
		}
		return this.state.search.matchedContacts[this.state.selectedContactIndex]
	}

	handleOpenModal = (selectedContactIndex) => {
		this.setState({ selectedContactIndex: selectedContactIndex });
		this.setState({ showModal: true });
	}

	handleCloseModal = () => {
		this.setState({ showModal: false });
	}

	filterContacts = () => {
		let searchTerm = this.state.search.term.toLowerCase();

		if (searchTerm.length === 0) {
			let newSearchObj = {...this.state.search, matchedContacts: []};
			this.setState({search: newSearchObj});		
			return;
		}

		let newMatchedContacts = this.state.allContacts.filter((contact, index) => {
			// filter by name
			if (isNaN(searchTerm)) {
				return contact.name.toLowerCase().includes(searchTerm); 
			}
			// filter by phone
			else if(!isNaN(searchTerm)){
				return String(contact.phone).toLowerCase().includes(searchTerm); 
			}
			return false;
		});

		let newSearchObj = {...this.state.search, matchedContacts: newMatchedContacts};
		this.setState({search: newSearchObj});		
	}

	typingHandler = async (event) => {
		let newSearchObj = {
			...this.state.search , 
			term: event.target.value
		}
		
		// setState is async so we must wait for it to finish before 
		// calling filterContacts to ensure we're getting the latest typed 
		// search-term from state
		await this.setState({search: newSearchObj});

		this.filterContacts()
	}
	
	renderContactsList = () => {
		let foundMatchedContacts = (this.state.search.matchedContacts.length !== 0) 
			
		let contacts = foundMatchedContacts ? 
			this.state.search.matchedContacts:
			this.state.allContacts;

		return <div className="contact-list-wrapper"> 
			{contacts.map((item, index)=>{
				return <ContactList 
					index={index}
					name={item.name}
					phone={item.phone}
					key={uniqid()}
					handleOpenModal={this.handleOpenModal}
					/>			
			})}
		</div> 
	}
}

