// tslint:disable
// this is an auto generated file. This will be overwritten

export const createSession = `mutation CreateSession($input: CreateSessionInput!) {
  createSession(input: $input) {
    id
    name
  }
}
`;
export const updateSession = `mutation UpdateSession($input: UpdateSessionInput!) {
  updateSession(input: $input) {
    id
    name
  }
}
`;
export const deleteSession = `mutation DeleteSession($input: DeleteSessionInput!) {
  deleteSession(input: $input) {
    id
    name
  }
}
`;
export const createWorkItem = `mutation CreateWorkItem($input: CreateWorkItemInput!) {
  createWorkItem(input: $input) {
    id
    name
    estimates {
      items {
        id
        estimate
      }
      nextToken
    }
  }
}
`;
export const updateWorkItem = `mutation UpdateWorkItem($input: UpdateWorkItemInput!) {
  updateWorkItem(input: $input) {
    id
    name
    estimates {
      items {
        id
        estimate
      }
      nextToken
    }
  }
}
`;
export const deleteWorkItem = `mutation DeleteWorkItem($input: DeleteWorkItemInput!) {
  deleteWorkItem(input: $input) {
    id
    name
    estimates {
      items {
        id
        estimate
      }
      nextToken
    }
  }
}
`;
export const createEstimate = `mutation CreateEstimate($input: CreateEstimateInput!) {
  createEstimate(input: $input) {
    id
    estimate
  }
}
`;
export const updateEstimate = `mutation UpdateEstimate($input: UpdateEstimateInput!) {
  updateEstimate(input: $input) {
    id
    estimate
  }
}
`;
export const deleteEstimate = `mutation DeleteEstimate($input: DeleteEstimateInput!) {
  deleteEstimate(input: $input) {
    id
    estimate
  }
}
`;
