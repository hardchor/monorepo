/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateSessionInput = {
  id?: string | null,
  name?: string | null,
};

export type UpdateSessionInput = {
  id: string,
  name?: string | null,
};

export type DeleteSessionInput = {
  id?: string | null,
};

export type CreateWorkItemInput = {
  id?: string | null,
  name?: string | null,
};

export enum PlanningPokerCard {
  EST_0 = "EST_0",
  EST_1 = "EST_1",
  EST_2 = "EST_2",
  EST_3 = "EST_3",
  EST_5 = "EST_5",
}


export type UpdateWorkItemInput = {
  id: string,
  name?: string | null,
};

export type DeleteWorkItemInput = {
  id?: string | null,
};

export type CreateEstimateInput = {
  id?: string | null,
  estimate: PlanningPokerCard,
  workItemEstimatesId?: string | null,
};

export type UpdateEstimateInput = {
  id: string,
  estimate?: PlanningPokerCard | null,
  workItemEstimatesId?: string | null,
};

export type DeleteEstimateInput = {
  id?: string | null,
};

export type ModelSessionFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelWorkItemFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelWorkItemFilterInput | null > | null,
  or?: Array< ModelWorkItemFilterInput | null > | null,
  not?: ModelWorkItemFilterInput | null,
};

export type ModelEstimateFilterInput = {
  id?: ModelIDFilterInput | null,
  estimate?: ModelPlanningPokerCardFilterInput | null,
  and?: Array< ModelEstimateFilterInput | null > | null,
  or?: Array< ModelEstimateFilterInput | null > | null,
  not?: ModelEstimateFilterInput | null,
};

export type ModelPlanningPokerCardFilterInput = {
  eq?: PlanningPokerCard | null,
  ne?: PlanningPokerCard | null,
};

export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
};

export type CreateSessionMutation = {
  createSession:  {
    __typename: "Session",
    id: string,
    name: string | null,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input: UpdateSessionInput,
};

export type UpdateSessionMutation = {
  updateSession:  {
    __typename: "Session",
    id: string,
    name: string | null,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input: DeleteSessionInput,
};

export type DeleteSessionMutation = {
  deleteSession:  {
    __typename: "Session",
    id: string,
    name: string | null,
  } | null,
};

export type CreateWorkItemMutationVariables = {
  input: CreateWorkItemInput,
};

export type CreateWorkItemMutation = {
  createWorkItem:  {
    __typename: "WorkItem",
    id: string,
    name: string | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        estimate: PlanningPokerCard,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateWorkItemMutationVariables = {
  input: UpdateWorkItemInput,
};

export type UpdateWorkItemMutation = {
  updateWorkItem:  {
    __typename: "WorkItem",
    id: string,
    name: string | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        estimate: PlanningPokerCard,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteWorkItemMutationVariables = {
  input: DeleteWorkItemInput,
};

export type DeleteWorkItemMutation = {
  deleteWorkItem:  {
    __typename: "WorkItem",
    id: string,
    name: string | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        estimate: PlanningPokerCard,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateEstimateMutationVariables = {
  input: CreateEstimateInput,
};

export type CreateEstimateMutation = {
  createEstimate:  {
    __typename: "Estimate",
    id: string,
    estimate: PlanningPokerCard,
  } | null,
};

export type UpdateEstimateMutationVariables = {
  input: UpdateEstimateInput,
};

export type UpdateEstimateMutation = {
  updateEstimate:  {
    __typename: "Estimate",
    id: string,
    estimate: PlanningPokerCard,
  } | null,
};

export type DeleteEstimateMutationVariables = {
  input: DeleteEstimateInput,
};

export type DeleteEstimateMutation = {
  deleteEstimate:  {
    __typename: "Estimate",
    id: string,
    estimate: PlanningPokerCard,
  } | null,
};

export type GetSessionQueryVariables = {
  id: string,
};

export type GetSessionQuery = {
  getSession:  {
    __typename: "Session",
    id: string,
    name: string | null,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      name: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetWorkItemQueryVariables = {
  id: string,
};

export type GetWorkItemQuery = {
  getWorkItem:  {
    __typename: "WorkItem",
    id: string,
    name: string | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        estimate: PlanningPokerCard,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListWorkItemsQueryVariables = {
  filter?: ModelWorkItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkItemsQuery = {
  listWorkItems:  {
    __typename: "ModelWorkItemConnection",
    items:  Array< {
      __typename: "WorkItem",
      id: string,
      name: string | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEstimateQueryVariables = {
  id: string,
};

export type GetEstimateQuery = {
  getEstimate:  {
    __typename: "Estimate",
    id: string,
    estimate: PlanningPokerCard,
  } | null,
};

export type ListEstimatesQueryVariables = {
  filter?: ModelEstimateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEstimatesQuery = {
  listEstimates:  {
    __typename: "ModelEstimateConnection",
    items:  Array< {
      __typename: "Estimate",
      id: string,
      estimate: PlanningPokerCard,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession:  {
    __typename: "Session",
    id: string,
    name: string | null,
  } | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession:  {
    __typename: "Session",
    id: string,
    name: string | null,
  } | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession:  {
    __typename: "Session",
    id: string,
    name: string | null,
  } | null,
};

export type OnCreateWorkItemSubscription = {
  onCreateWorkItem:  {
    __typename: "WorkItem",
    id: string,
    name: string | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        estimate: PlanningPokerCard,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateWorkItemSubscription = {
  onUpdateWorkItem:  {
    __typename: "WorkItem",
    id: string,
    name: string | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        estimate: PlanningPokerCard,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteWorkItemSubscription = {
  onDeleteWorkItem:  {
    __typename: "WorkItem",
    id: string,
    name: string | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        estimate: PlanningPokerCard,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateEstimateSubscription = {
  onCreateEstimate:  {
    __typename: "Estimate",
    id: string,
    estimate: PlanningPokerCard,
  } | null,
};

export type OnUpdateEstimateSubscription = {
  onUpdateEstimate:  {
    __typename: "Estimate",
    id: string,
    estimate: PlanningPokerCard,
  } | null,
};

export type OnDeleteEstimateSubscription = {
  onDeleteEstimate:  {
    __typename: "Estimate",
    id: string,
    estimate: PlanningPokerCard,
  } | null,
};
