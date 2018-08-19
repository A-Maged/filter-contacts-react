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
					phone: 1234
				},
				{
					name: "mahmod",
					phone: 4567
				},
				{
					name: "omar",
					phone: 8945
				},
				{
					name: "yousef",
					phone: 1478
				},
				{
					name: "gamal",
					phone: 8569
				},
				{
					name: "karim",
					phone: 6512
				},

				{
					name: "max",
					phone: 4500
				},
				{
					name: "cory",
					phone: 1295
				},
				{
					name: "mike",
					phone: 7455
				},
				{
					name: "jack",
					phone: 2301
				},
				{
					name: "dan",
					phone: 7496
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

		if(newMatchedContacts.length !== 0){
			let newSearchObj = {...this.state.search, matchedContacts: newMatchedContacts};
			this.setState({search: newSearchObj});		
		}
		else{
			let newSearchObj = {...this.state.search, matchedContacts: []};
			this.setState({search: newSearchObj});		
			console.log('no match');
		}
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

		return contacts.map((item)=>{
			return <ContactList 
				name={item.name}
				phone={item.phone}
				key={uniqid()}/>			
		});
	}
}

