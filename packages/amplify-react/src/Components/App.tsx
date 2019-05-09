import React, { FunctionComponent, useEffect } from 'react';
import { Router } from '@reach/router';
import Amplify, { Analytics } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from '../aws-exports';
import './App.css';
import Home from './Home';
import Session from './Session';

Amplify.configure(awsconfig);

const App: FunctionComponent = () => {
  useEffect(() => {
    Analytics.record('Amplify_CLI');
  }, []);

  return (
    <div className="App">
      <h1>Planning Poker</h1>
      <Router>
        <Home path="/" />
        <Session path="/session/:sessionId" />
      </Router>
    </div>
  );
};

export default withAuthenticator(App, true);
