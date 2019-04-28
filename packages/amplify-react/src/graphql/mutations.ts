// tslint:disable
// this is an auto generated file. This will be overwritten

export const createSession = `mutation CreateSession($input: CreateSessionInput!) {
  createSession(input: $input) {
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
export const updateSession = `mutation UpdateSession($input: UpdateSessionInput!) {
  updateSession(input: $input) {
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
export const deleteSession = `mutation DeleteSession($input: DeleteSessionInput!) {
  deleteSession(input: $input) {
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
export const createParticipant = `mutation CreateParticipant($input: CreateParticipantInput!) {
  createParticipant(input: $input) {
    id
    name
  }
}
`;
export const updateParticipant = `mutation UpdateParticipant($input: UpdateParticipantInput!) {
  updateParticipant(input: $input) {
    id
    name
  }
}
`;
export const deleteParticipant = `mutation DeleteParticipant($input: DeleteParticipantInput!) {
  deleteParticipant(input: $input) {
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
export const updateWorkItem = `mutation UpdateWorkItem($input: UpdateWorkItemInput!) {
  updateWorkItem(input: $input) {
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
export const deleteWorkItem = `mutation DeleteWorkItem($input: DeleteWorkItemInput!) {
  deleteWorkItem(input: $input) {
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
export const createEstimate = `mutation CreateEstimate($input: CreateEstimateInput!) {
  createEstimate(input: $input) {
    id
    estimate
    participant {
      id
      name
    }
  }
}
`;
export const updateEstimate = `mutation UpdateEstimate($input: UpdateEstimateInput!) {
  updateEstimate(input: $input) {
    id
    estimate
    participant {
      id
      name
    }
  }
}
`;
export const deleteEstimate = `mutation DeleteEstimate($input: DeleteEstimateInput!) {
  deleteEstimate(input: $input) {
    id
    estimate
    participant {
      id
      name
    }
  }
}
`;
