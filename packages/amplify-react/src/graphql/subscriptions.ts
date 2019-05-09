// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateSession = `subscription OnCreateSession {
  onCreateSession {
    id
    name
  }
}
`;
export const onUpdateSession = `subscription OnUpdateSession {
  onUpdateSession {
    id
    name
  }
}
`;
export const onDeleteSession = `subscription OnDeleteSession {
  onDeleteSession {
    id
    name
  }
}
`;
export const onCreateWorkItem = `subscription OnCreateWorkItem {
  onCreateWorkItem {
    id
    name
    estimates {
      id
      estimate
    }
  }
}
`;
export const onUpdateWorkItem = `subscription OnUpdateWorkItem {
  onUpdateWorkItem {
    id
    name
    estimates {
      id
      estimate
    }
  }
}
`;
export const onDeleteWorkItem = `subscription OnDeleteWorkItem {
  onDeleteWorkItem {
    id
    name
    estimates {
      id
      estimate
    }
  }
}
`;
export const onCreateEstimate = `subscription OnCreateEstimate {
  onCreateEstimate {
    id
    estimate
  }
}
`;
export const onUpdateEstimate = `subscription OnUpdateEstimate {
  onUpdateEstimate {
    id
    estimate
  }
}
`;
export const onDeleteEstimate = `subscription OnDeleteEstimate {
  onDeleteEstimate {
    id
    estimate
  }
}
`;
