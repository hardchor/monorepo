import React, { FunctionComponent } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createSession } from '../../graphql/mutations';
import { CreateSessionInput } from '../../API';
import path from 'ramda/es/path';
import { navigate } from '@reach/router';

const createSessionMutation = (input: CreateSessionInput) =>
  graphqlOperation(createSession, { input });

const CreateSessionButton: FunctionComponent = () => {
  const onClick = async () => {
    const result = await API.graphql(createSessionMutation({}));
    const sessionId = path(['data', 'createSession', 'id'], result);
    navigate(`/session/${sessionId}`);
  };

  return <button onClick={onClick}>Start new session</button>;
};

export default CreateSessionButton;
