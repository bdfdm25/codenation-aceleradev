import React from 'react';
import './App.scss';
import Contacts from './components/Contacts/Contacts';
import TopBar from './components/Topbar/Topbar';
import Filters from './components/Filters/Filters';

class App extends React.Component {

  state = {
    contacts: []
  }

  componentDidMount() {

    const baseUrl = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';

    async function getData() {
      const response = await fetch(baseUrl, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    getData().then(res => this.setState({ contacts: res }));
  }

  searchContact = (contact) => {
    this.setState({ contacts: contact });
  }

  render() {
    return (
      <React.Fragment>
        <TopBar></TopBar>
        <Filters
          contacts={this.state.contacts}
          onSearch={this.searchContact}
        ></Filters>
        <Contacts
          contacts={this.state.contacts}
        ></Contacts>
      </React.Fragment>
    )
  }
}

export default App;
