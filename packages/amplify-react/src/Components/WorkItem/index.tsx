import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { GetWorkItemQuery } from '../../API';
import { getWorkItem as getWorkItemQuery } from '../../graphql/queries';
import CreateEstimates from './CreateEstimates';
import ListEstimates from './ListEstimates';
import useQuery from '../../hooks/useQuery';

const ShowWorkItem: FunctionComponent<RouteComponentProps<{ workItemId: string }>> = ({
  workItemId,
}) => {
  const { data, error, loading, refetch } = useQuery<GetWorkItemQuery>(getWorkItemQuery, {
    id: workItemId,
  });
  const { getWorkItem: workItem } = data;

  return (
    <div>
      <h2>Work Item {workItem && workItem.id}</h2>
      {loading && 'Loading ...'}
      {!loading && error && <p>Error :(</p>}
      {!loading && workItem && workItem.id && (
        <div>
          <CreateEstimates workItemId={workItem.id} />
          <button onClick={() => refetch()}>Reload</button>
        </div>
      )}
      {!loading && workItem && workItem.estimates && workItem.estimates.items && (
        <ListEstimates estimates={workItem.estimates.items} />
      )}
    </div>
  );
};

export default ShowWorkItem;
