import React, { FunctionComponent } from 'react';
import { GetWorkItemQuery } from '../../API';

const ListEstimates: FunctionComponent<{
  estimates: GetWorkItemQuery['getWorkItem'].estimates;
}> = ({ estimates }) => {
  return <div>list</div>;
};

export default ListEstimates;
