import React, { Component } from 'react';
import Amplify, { Analytics } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsmobile from '../aws-exports';
import './App.css';
import Participant from './Participant';

Amplify.configure(awsmobile);

class App extends Component {
  componentDidMount() {
    Analytics.record('Amplify_CLI');
  }

  render() {
    return (
      <div className="App">
        <Participant />
      </div>
    );
  }
}

export default withAuthenticator(App, true);
