import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { GetWorkItemQueryVariables, GetWorkItemQuery } from '../../API';
import { getWorkItem as getWorkItemQuery } from '../../graphql/queries';
import { graphqlOperation, API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api/lib/types';

declare type GetWorkItemResult = GraphQLResult & {
  data: GetWorkItemQuery;
};
declare type WorkItem = {
  id: string;
  name: string | null;
};

const getWorkItem = (query: GetWorkItemQueryVariables) => graphqlOperation(getWorkItemQuery, query);

const WorkItem: FunctionComponent<RouteComponentProps<{ workItemId: string }>> = ({
  workItemId,
}) => {
  const [workItem, setWorkItem] = useState({} as WorkItem);

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
      <h2>Work Item {workItem.id}</h2>
    </div>
  );
};

export default WorkItem;
