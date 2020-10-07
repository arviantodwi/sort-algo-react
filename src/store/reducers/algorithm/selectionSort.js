const CURRENT_TWO_SELECTION = 'CURRENT_TWO_SELECTION';

export const setCurrentTwoSelection = (twoSelectionIndexes) => ({
  type: 'CURRENT_TWO_SELECTION',
  twoSelectionIndexes,
});

export const currentTwoSelection = (state = [], payload) => {
  switch (payload.type) {
    case CURRENT_TWO_SELECTION:
      return payload.twoSelectionIndexes;
    default:
      return state;
  }
};
