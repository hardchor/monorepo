import React, { FunctionComponent } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createSession } from '../../graphql/mutations';
import { CreateSessionInput } from '../../API';

const createSessionMutation = (input: CreateSessionInput) =>
  graphqlOperation(createSession, { input });

const CreateSessionButton: FunctionComponent = () => {
  const onClick = async () => {
    await API.graphql(createSessionMutation({}));
  };

  return <button onClick={onClick}>Start new session</button>;
};

export default CreateSessionButton;
