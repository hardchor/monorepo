import React, { FunctionComponent } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createEstimate } from '../../graphql/mutations';
import { CreateEstimateInput, PlanningPokerCard } from '../../API';

const createEstimateMutation = (input: CreateEstimateInput) =>
  graphqlOperation(createEstimate, { input });

const CreateEstimateButton: FunctionComponent<{
  workItemId: string;
  estimate: PlanningPokerCard;
}> = ({ workItemId, estimate }) => {
  const onClick = async () => {
    await API.graphql(createEstimateMutation({ estimate, workItemEstimatesId: workItemId }));
  };

  return <button onClick={onClick}>Create estimate {estimate}</button>;
};

export default CreateEstimateButton;
