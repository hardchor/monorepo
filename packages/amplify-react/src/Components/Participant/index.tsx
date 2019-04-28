import React, { FormEvent, FunctionComponent, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createParticipant } from '../../graphql/mutations';
import { CreateParticipantMutationVariables } from '../../API';

const createParticipantMutation = (data: CreateParticipantMutationVariables) =>
  graphqlOperation(createParticipant, data);

const ParticipantForm: FunctionComponent = () => {
  const [name, setName] = useState('');
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await API.graphql(createParticipantMutation({ input: { name } }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What's your name?
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ParticipantForm;
