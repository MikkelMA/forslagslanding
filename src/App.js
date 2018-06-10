import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proposals: []
    };
  }

  async componentDidMount() {
    const contentful = require('contentful')
    const client = contentful.createClient({
      space: 'od2u0a503wdo',
      accessToken: 'c2fdff4e1732a6e101d74b82fd9effc351ba32a951b96558a0d3c16fd322faa4'
    })
    const response = await client.getEntries()
    const proposals = response.items.map(item => {
      return item.fields
    })
      // this.setState(Proposals: response)
     // .then((response) => this.setState(response))
     this.setState({
       proposals: proposals
     })
     // .catch(console.error)
  }



  render() {

    console.log(this.state.proposals);

    return (
      <div className="App-title">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-intro">Initiativets folkemødeforslag</h1>
       {this.state.proposals.map((proposal, index) => (
         <div key={index}>
         <h2 className="Header" > {proposal.header} </h2>
        <p className="Proposal">
        {proposal.lovforslag}
        </p>
        </div>
      ))}
      </div>

    );
  }
}

export default App;
