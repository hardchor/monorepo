import React, { FunctionComponent } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useForm, useField } from 'react-final-form-hooks';
import { Config } from 'final-form';
import Joi from '@hapi/joi';
import { createParticipant } from '../../graphql/mutations';
import { CreateParticipantMutationVariables, CreateParticipantInput } from '../../API';
import validateForm from '../../validation/validateForm';

const createParticipantMutation = (data: CreateParticipantMutationVariables) =>
  graphqlOperation(createParticipant, data);

const schema = Joi.object().keys({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
});
const validate = validateForm(schema);

const ParticipantForm: FunctionComponent = () => {
  const onSubmit = async (input: CreateParticipantInput) => {
    await API.graphql(createParticipantMutation({ input }));
  };

  const { form, handleSubmit, pristine, submitting } = useForm<Config<CreateParticipantInput>>({
    onSubmit,
    validate,
  });
  const name = useField('name', form);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Your name</label>
        <input {...name.input} placeholder="Name" />
        {name.meta.touched && name.meta.error && <span>{name.meta.error}</span>}
      </div>
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  );
};

export default ParticipantForm;
