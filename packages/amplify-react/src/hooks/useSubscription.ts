import { graphqlOperation, API } from 'aws-amplify';
import useDeepCompareEffect from 'use-deep-compare-effect';
import Observable from 'zen-observable';

export default <ResultType extends {}, VariablesType extends {} = {}>(
  onUpdate: () => void,
  query: string,
  variables?: VariablesType,
): void => {
  useDeepCompareEffect(() => {
    const operation = API.graphql(graphqlOperation(query, variables)) as Observable<ResultType>;
    const subscription = operation.subscribe({
      next: onUpdate,
    });

    return () => {
      // clean up
      subscription.unsubscribe();
    };
  }, [query, variables]);
};
