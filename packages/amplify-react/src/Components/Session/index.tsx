import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { GetSessionQueryVariables } from '../../API';
import { getSession as getSessionQuery } from '../../graphql/queries';
import { graphqlOperation, API } from 'aws-amplify';

const getSession = (query: GetSessionQueryVariables) => graphqlOperation(getSessionQuery, query);

const Session: FunctionComponent<RouteComponentProps<{ sessionId: string }>> = ({ sessionId }) => {
  const [session, setSession] = useState({});

  useEffect(() => {
    const fetchSession = async (id: string) => {
      const result = await API.graphql(getSession({ id }));
      setSession(result);
    };

    if (!sessionId) return;

    fetchSession(sessionId);
  }, [sessionId]);
  console.log('#####', session);

  return (
    <div>
      <h2>Session</h2>
    </div>
  );
};

export default Session;
