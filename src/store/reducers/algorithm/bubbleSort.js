const SET_CURRENT_TWO_BUBBLE = 'SET_CURRENT_TWO_BUBBLE';

export const setCurrentTwoBubble = (twoBubbleIndexes) => ({
  type: 'SET_CURRENT_TWO_BUBBLE',
  twoBubbleIndexes,
});

export const currentTwoBubble = (state = [], payload) => {
  switch (payload.type) {
    case SET_CURRENT_TWO_BUBBLE:
      return payload.twoBubbleIndexes;
    default:
      return state;
  }
};
