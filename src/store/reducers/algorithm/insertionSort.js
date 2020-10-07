const CURRENT_TWO_INSERTION = 'CURRENT_TWO_INSERTION';

export const setCurrentTwoInsertion = (twoInsertionIndexes) => ({
  type: 'CURRENT_TWO_INSERTION',
  twoInsertionIndexes,
});

export const currentTwoInsertion = (state = [], payload) => {
  switch (payload.type) {
    case CURRENT_TWO_INSERTION:
      return payload.twoInsertionIndexes;
    default:
      return state;
  }
};
