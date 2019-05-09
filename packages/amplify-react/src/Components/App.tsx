import React, { FunctionComponent, useEffect } from 'react';
import Amplify, { Analytics } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from '../aws-exports';
import './App.css';
import CreateSession from './CreateSession';

Amplify.configure(awsconfig);

const App: FunctionComponent = () => {
  useEffect(() => {
    Analytics.record('Amplify_CLI');
  }, []);

  return (
    <div className="App">
      <h1>Planning Poker</h1>
      <CreateSession />
    </div>
  );
};

export default withAuthenticator(App, true);
