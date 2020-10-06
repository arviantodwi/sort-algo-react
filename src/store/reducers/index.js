import { combineReducers } from 'redux';
import { array } from './array';
import { algorithm } from './algorithm';
import * as misc from './misc';

export default combineReducers({
  array,
  algorithm,
  isSortRunning: misc.isSortRunning,
  sortedIndexes: misc.sortedIndexes,
  swappingIndexes: misc.swappingIndexes,
});
