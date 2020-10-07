import { combineReducers } from 'redux';
import { array } from './array';
import { algorithm } from './algorithm';
import { currentTwoBubble } from './algorithm/bubbleSort';
import * as misc from './misc';

export default combineReducers({
  array,
  algorithm,
  currentTwoBubble,
  isSortRunning: misc.isSortRunning,
  sortedIndexes: misc.sortedIndexes,
  swappingIndexes: misc.swappingIndexes,
});
