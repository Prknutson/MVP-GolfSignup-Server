import React from 'react';
import ReactDOM from 'react-dom';

import Signups from './components/signups.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Signups />
      </div>
    );
  }
}



// ReactDOM.render(<AlbumsList />, document.getElementById('app'));
ReactDOM.render(< App />, document.getElementById('signups'));