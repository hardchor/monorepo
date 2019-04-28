// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateSession = `subscription OnCreateSession {
  onCreateSession {
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
export const onUpdateSession = `subscription OnUpdateSession {
  onUpdateSession {
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
export const onDeleteSession = `subscription OnDeleteSession {
  onDeleteSession {
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
export const onCreateParticipant = `subscription OnCreateParticipant {
  onCreateParticipant {
    id
    name
  }
}
`;
export const onUpdateParticipant = `subscription OnUpdateParticipant {
  onUpdateParticipant {
    id
    name
  }
}
`;
export const onDeleteParticipant = `subscription OnDeleteParticipant {
  onDeleteParticipant {
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
      participant {
        id
        name
      }
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
      participant {
        id
        name
      }
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
      participant {
        id
        name
      }
    }
  }
}
`;
export const onCreateEstimate = `subscription OnCreateEstimate {
  onCreateEstimate {
    id
    estimate
    participant {
      id
      name
    }
  }
}
`;
export const onUpdateEstimate = `subscription OnUpdateEstimate {
  onUpdateEstimate {
    id
    estimate
    participant {
      id
      name
    }
  }
}
`;
export const onDeleteEstimate = `subscription OnDeleteEstimate {
  onDeleteEstimate {
    id
    estimate
    participant {
      id
      name
    }
  }
}
`;
