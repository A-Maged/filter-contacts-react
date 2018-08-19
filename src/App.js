import React, { Component } from 'react';
import uniqid from 'uniqid';

import './App.css';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';

export default class App extends Component {
	constructor(){
		super();

		this.state = {
			search: {
				term: '',
				matchedContacts: [],
			},
			allContacts: [
				{
					name: "abdo",
					phone: 7125398213
				},
				{
					name: "mahmod",
					phone: 6395846188
				},
				{
					name: "omar",
					phone: 8193622770
				},
				{
					name: "yousef",
					phone: 3549600982
				},
				{
					name: "gamal",
					phone: 2018014439
				},
				{
					name: "karim",
					phone: 6425474935
				},

				{
					name: "max",
					phone: 3562529343
				},
				{
					name: "cory",
					phone: 4734578060
				},
				{
					name: "mike",
					phone: 3677519298
				},
				{
					name: "jack",
					phone: 7809033916
				},
				{
					name: "dan",
					phone: 2709034016
				}
			]
		};
	}

	render() {
		return (
			<div className="App" >
				<SearchBox
					typingHandler={this.typingHandler} 
					filterContacts={this.filterContacts}
					term={this.state.search.term} />

				{this.renderContactsList()}

				{this.state.search.matchedContacts.length === 0 && 
				<div className="no-match">no match</div>}
			</div>
		);
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
		
		// must wait for this to finish before calling filterContacts
		await this.setState({search: newSearchObj});

		this.filterContacts()
	}
	
	renderContactsList = () => {
		let foundMatchedContacts = (this.state.search.matchedContacts.length !== 0) 
			
		let contacts = foundMatchedContacts ? 
			this.state.search.matchedContacts:
			this.state.allContacts;

		return <div className="contact-list-wrapper"> 
			{contacts.map((item)=>{
				return <ContactList 
					name={item.name}
					phone={item.phone}
					key={uniqid()}/>			
			})}
		</div> 
	}
}

