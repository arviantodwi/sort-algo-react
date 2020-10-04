const SET_ALGORITHM = 'SET_ALGORITHM';

export const setAlgorithm = (algo) => ({ type: 'SET_ALGORITHM', algo });

export const algorithm = (state = null, payload) => {
  switch (payload.type) {
    case SET_ALGORITHM:
      return payload.algo;
    default:
      return state;
  }
};
