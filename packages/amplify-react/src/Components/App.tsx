import React, { FunctionComponent, useEffect } from 'react';
import Amplify, { Analytics, Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from '../aws-exports';
import './App.css';
// import Participant from './Participant';

Amplify.configure(awsconfig);

const App: FunctionComponent = () => {
  useEffect(() => {
    // Analytics.record('Amplify_CLI');
  }, []);

  return (
    <div className="App">
      Hi!
      {/* <button onClick={() => Auth.federatedSignIn()}>Sign In</button> */}
      {/* <Participant /> */}
    </div>
  );
};

export default withAuthenticator(App, true, [], {
  google_client_id: '1003625021989-0f9t1b02kh6ss8fonvam84pk9eierbcv.apps.googleusercontent.com',
});
// export default App;
