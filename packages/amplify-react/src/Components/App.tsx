import React, { FunctionComponent, useEffect } from 'react';
import Amplify, { Analytics } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsmobile from '../aws-exports';
import './App.css';
import Participant from './Participant';

Amplify.configure(awsmobile);

const App: FunctionComponent = () => {
  useEffect(() => {
    Analytics.record('Amplify_CLI');
  }, []);

  return (
    <div className="App">
      <Participant />
    </div>
  );
};

export default withAuthenticator(App, true);
