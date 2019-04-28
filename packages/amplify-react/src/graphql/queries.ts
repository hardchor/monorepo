// tslint:disable
// this is an auto generated file. This will be overwritten

export const getSession = `query GetSession($id: ID!) {
  getSession(id: $id) {
    id
    name
    facilitator {
      id
      name
    }
    participants {
      id
      name
    }
  }
}
`;
export const listSessions = `query ListSessions(
  $filter: ModelSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      facilitator {
        id
        name
      }
      participants {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getParticipant = `query GetParticipant($id: ID!) {
  getParticipant(id: $id) {
    id
    name
  }
}
`;
export const listParticipants = `query ListParticipants(
  $filter: ModelParticipantFilterInput
  $limit: Int
  $nextToken: String
) {
  listParticipants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
export const getWorkItem = `query GetWorkItem($id: ID!) {
  getWorkItem(id: $id) {
    id
    name
    estimates {
      id
      estimate
      participant {
        id
        name
      }
    }
  }
}
`;
export const listWorkItems = `query ListWorkItems(
  $filter: ModelWorkItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      estimates {
        id
        estimate
      }
    }
    nextToken
  }
}
`;
export const getEstimate = `query GetEstimate($id: ID!) {
  getEstimate(id: $id) {
    id
    estimate
    participant {
      id
      name
    }
  }
}
`;
export const listEstimates = `query ListEstimates(
  $filter: ModelEstimateFilterInput
  $limit: Int
  $nextToken: String
) {
  listEstimates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      estimate
      participant {
        id
        name
      }
    }
    nextToken
  }
}
`;
