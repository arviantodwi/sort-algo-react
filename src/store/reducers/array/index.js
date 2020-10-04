const ADD_ARRAY_ELEMENTS = 'ADD_ARRAY_ELEMENTS';
const REDUCE_ARRAY_ELEMENTS = 'REDUCE_ARRAY_ELEMENTS';
const SET_ARRAY = 'SET_ARRAY';

export const addArrayElements = (array) => ({ type: ADD_ARRAY_ELEMENTS, array });
export const reduceArrayElements = (lengthToReduce) => ({
  type: REDUCE_ARRAY_ELEMENTS,
  lengthToReduce,
});
export const setArray = (array) => ({ type: SET_ARRAY, array });

export const array = (state = [], action) => {
  switch (action.type) {
    case SET_ARRAY:
      return action.array;
    case ADD_ARRAY_ELEMENTS:
      return [...state, ...action.array];
    case REDUCE_ARRAY_ELEMENTS:
      return state.slice(0, state.length - action.lengthToReduce);
    default:
      return state;
  }
};
