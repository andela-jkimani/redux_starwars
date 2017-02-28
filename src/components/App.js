import React, { Component } from 'react';
import CharacterList from './CharacterList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <CharacterList />
        </div>
      </div>
    );
  }
}

export default App;
