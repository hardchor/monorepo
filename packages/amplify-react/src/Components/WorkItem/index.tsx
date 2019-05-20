import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { graphqlOperation, API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api/lib/types';
import { GetWorkItemQueryVariables, GetWorkItemQuery, PlanningPokerCard } from '../../API';
import { getWorkItem as getWorkItemQuery } from '../../graphql/queries';
import CreateEstimates from './CreateEstimates';
import ListEstimates from './ListEstimates';
import { Model } from '../../../types/models';

declare type GetWorkItemResult = GraphQLResult & {
  data: GetWorkItemQuery;
};

const getWorkItem = (query: GetWorkItemQueryVariables) => graphqlOperation(getWorkItemQuery, query);

const ShowWorkItem: FunctionComponent<RouteComponentProps<{ workItemId: string }>> = ({
  workItemId,
}) => {
  const [workItem, setWorkItem] = useState({} as GetWorkItemQuery['getWorkItem']);

  const fetchWorkItem = async (id: string) => {
    const { data } = (await API.graphql(getWorkItem({ id }))) as GetWorkItemResult;

    if (data.getWorkItem) {
      setWorkItem(data.getWorkItem);
    }
  };

  useEffect(() => {
    if (!workItemId) return;

    fetchWorkItem(workItemId);
  }, [workItemId]);

  return (
    <div>
      <h2>Work Item {workItemId}</h2>
      {workItemId && <CreateEstimates workItemId={workItemId} />}
      {workItem && workItem.estimates && workItem.estimates.items && (
        <ListEstimates estimates={workItem.estimates.items} />
      )}
    </div>
  );
};

export default ShowWorkItem;
