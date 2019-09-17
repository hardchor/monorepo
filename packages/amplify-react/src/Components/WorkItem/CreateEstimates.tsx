import React, { FunctionComponent } from 'react';
import CreateEstimate from '../CreateEstimate';
import { PlanningPokerCard } from '../../API';

const CreateEstimates: FunctionComponent<{ workItemId: string }> = ({ workItemId }) => {
  return (
    <div>
      <CreateEstimate workItemId={workItemId} estimate={PlanningPokerCard.EST_0} />
      <CreateEstimate workItemId={workItemId} estimate={PlanningPokerCard.EST_1} />
      <CreateEstimate workItemId={workItemId} estimate={PlanningPokerCard.EST_2} />
    </div>
  );
};

export default CreateEstimates;
