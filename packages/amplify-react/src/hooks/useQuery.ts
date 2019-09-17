import { graphqlOperation, API } from 'aws-amplify';
import React from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

type UseQueryType<ResultType> = {
  loading: boolean;
  error: any;
  data: ResultType;
  refetch: () => void;
};

export default <ResultType extends {}, VariablesType extends {} = {}>(
  query: string,
  variables?: VariablesType,
): UseQueryType<ResultType> => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [data, setData] = React.useState({} as ResultType);

  const fetchQuery = async (query: string, variables?: VariablesType) => {
    try {
      setLoading(true);
      const { data } = (await API.graphql(graphqlOperation(query, variables))) as {
        data: ResultType;
      };
      setData(data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchQuery(query, variables);
  };

  useDeepCompareEffect(() => {
    fetchQuery(query, variables);
  }, [query, variables]);

  return {
    loading,
    error,
    data,
    refetch,
  };
};
