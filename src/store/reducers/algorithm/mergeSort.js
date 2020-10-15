const SET_CURRENT_TWO_MERGE = 'SET_CURRENT_TWO_MERGE';

export const setCurrentTwoMerge = (mergeIndexes) => ({
  type: 'SET_CURRENT_TWO_MERGE',
  mergeIndexes,
});

export const currentTwoMerge = (state = [], payload) => {
  switch (payload.type) {
    case SET_CURRENT_TWO_MERGE:
      return payload.mergeIndexes;
    default:
      return state;
  }
};
