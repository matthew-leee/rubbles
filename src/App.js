import React, { Component } from 'react';
import './App.css';

import about from "./JSON/about.js"
import team from "./JSON/team.js"
import works from "./JSON/works.js"
import contact from "./JSON/contact.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main>
          <Bubble content={about} />
          <Bubble content={team} />
          <Bubble content={works} />
          <Bubble content={contact} />
        </Main>
      </div>
    );
  }
}

export default App;
