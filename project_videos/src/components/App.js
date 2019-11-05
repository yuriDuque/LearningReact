import React from 'react';

import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

class App extends React.Component {
  onTermSubmit = (term) => {
    console.log(term);
  }

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
