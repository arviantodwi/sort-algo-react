const TOGGLE_SORT_RUNNING = 'TOGGLE_SORT_RUNNING';
const SET_SORTED = 'SET_SORTED';
const SET_SWAPPING = 'SET_SWAPPING';

export const toggleSortRunning = () => ({ type: 'TOGGLE_SORT_RUNNING' });
export const setSorted = (sortedIndexes) => ({ type: 'SET_SORTED', sortedIndexes });
export const setSwapping = (currentSwappingIndexes) => ({
  type: 'SET_SWAPPING',
  currentSwappingIndexes,
});

export const isSortRunning = (state = false, payload) => {
  switch (payload.type) {
    case TOGGLE_SORT_RUNNING:
      return !state;
    default:
      return state;
  }
};

export const sortedIndexes = (state = [], payload) => {
  switch (payload.type) {
    case SET_SORTED:
      let indexes;
      if (!payload.sortedIndexes.length) {
        indexes = [];
      } else {
        indexes =
          payload.sortedIndexes[0] === true
            ? state.concat(payload.sortedIndexes.slice(1))
            : payload.sortedIndexes;
      }
      return indexes;
    default:
      return state;
  }
};

export const swappingIndexes = (state = [], payload) => {
  switch (payload.type) {
    case SET_SWAPPING:
      return payload.currentSwappingIndexes;
    default:
      return state;
  }
};
