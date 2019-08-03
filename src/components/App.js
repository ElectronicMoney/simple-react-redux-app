import React from 'react';
import Users from './Contents/Users';
import Posts from './Contents/Posts';

class App extends React.Component {

  render() {
    return (
      <div>
        <Users />
        <Posts />
      </div>
    );
  }
}

export default App;
