import React, { FunctionComponent } from 'react';

type Estimate = {
  id: string;
  estimate: string;
};

const ListEstimates: FunctionComponent<{
  estimates: Array<Estimate | null>;
}> = ({ estimates }) => {
  return (
    <ul>
      {estimates.map(estimate => {
        if (!estimate) return null;
        return <li key={estimate.id}>{estimate.estimate}</li>;
      })}
    </ul>
  );
};

export default ListEstimates;
