import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { GetSessionQueryVariables, GetSessionQuery } from '../../API';
import { getSession as getSessionQuery } from '../../graphql/queries';
import { graphqlOperation, API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api/lib/types';

declare type GetSessionResult = GraphQLResult & {
  data: GetSessionQuery;
};
declare type Session = {
  id: string;
  name: string | null;
};

const getSession = (query: GetSessionQueryVariables) => graphqlOperation(getSessionQuery, query);

const Session: FunctionComponent<RouteComponentProps<{ sessionId: string }>> = ({ sessionId }) => {
  const [session, setSession] = useState({} as Session);

  const fetchSession = async (id: string) => {
    const { data } = (await API.graphql(getSession({ id }))) as GetSessionResult;

    if (data.getSession) {
      setSession(data.getSession);
    }
  };

  useEffect(() => {
    if (!sessionId) return;

    fetchSession(sessionId);
  }, [sessionId]);

  return (
    <div>
      <h2>Session {session.id}</h2>
    </div>
  );
};

export default Session;
