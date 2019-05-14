import React, { FunctionComponent } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createWorkItem } from '../../graphql/mutations';
import { CreateWorkItemInput } from '../../API';
import path from 'ramda/es/path';
import { navigate } from '@reach/router';

const createWorkItemMutation = (input: CreateWorkItemInput) =>
  graphqlOperation(createWorkItem, { input });

const CreateWorkItemButton: FunctionComponent<{ sessionId: string }> = ({ sessionId }) => {
  const onClick = async () => {
    const result = await API.graphql(createWorkItemMutation({}));
    const workItemId = path(['data', 'createWorkItem', 'id'], result);
    navigate(`/session/${sessionId}/work-item/${workItemId}`);
  };

  return <button onClick={onClick}>Create workitem</button>;
};

export default CreateWorkItemButton;
