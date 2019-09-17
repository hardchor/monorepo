import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { GetSessionQuery } from '../../API';
import { getSession as getSessionQuery } from '../../graphql/queries';
import CreateWorkItemButton from '../CreateWorkItem';
import useQuery from '../../hooks/useQuery';

const Session: FunctionComponent<RouteComponentProps<{ sessionId: string }>> = ({
  sessionId,
  children,
}) => {
  const { data, error, loading, refetch } = useQuery<GetSessionQuery>(getSessionQuery, {
    id: sessionId,
  });
  const { getSession: session } = data;

  return (
    <div>
      <h2>Session {session && session.id}</h2>
      {loading && 'Loading ...'}
      {!loading && error && <p>Error :(</p>}
      {!loading && session && session.id && (
        <div>
          <CreateWorkItemButton sessionId={session.id} />
          <button onClick={() => refetch()}>Reload</button>
        </div>
      )}
      {children}
    </div>
  );
};

export default Session;
