import React, { FunctionComponent } from 'react';
import CreateSession from '../CreateSession';
import { RouteComponentProps } from '@reach/router';

const Home: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div>
      <h2>Home</h2>
      <CreateSession />
    </div>
  );
};

export default Home;
