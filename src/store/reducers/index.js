import { combineReducers } from 'redux';
import { array } from './array';
import { algorithm } from './algorithm';
import { currentTwoBubble } from './algorithm/bubbleSort';
import { currentTwoSelection } from './algorithm/selectionSort';
import * as misc from './misc';

export default combineReducers({
  array,
  algorithm,
  currentTwoBubble,
  currentTwoSelection,
  isSortRunning: misc.isSortRunning,
  sortedIndexes: misc.sortedIndexes,
  swappingIndexes: misc.swappingIndexes,
});
