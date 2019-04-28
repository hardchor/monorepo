import React, { Component } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsmobile from '../../aws-exports';
// import './App.css';
import { createParticipant } from '../../graphql/mutations';
import { CreateParticipantMutationVariables } from '../../API';

Amplify.configure(awsmobile);

const createParticipantMutation = (data: CreateParticipantMutationVariables) =>
  graphqlOperation(createParticipant, data);

class App extends Component {
  todoMutation = async () => {
    const participantDetails = {
      name: 'Aaron',
    };

    const newEvent = await API.graphql(createParticipantMutation({ input: participantDetails }));
    console.log(newEvent);
  };

  render() {
    return <button onClick={this.todoMutation}>GraphQL Mutation</button>;
  }
}

export default withAuthenticator(App, true);
