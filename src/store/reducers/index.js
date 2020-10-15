import { combineReducers } from 'redux';
import { array } from './array';
import { algorithm } from './algorithm';
import { currentTwoBubble } from './algorithm/bubbleSort';
import { currentTwoSelection } from './algorithm/selectionSort';
import { currentTwoInsertion } from './algorithm/insertionSort';
import { currentTwoMerge } from './algorithm/mergeSort';
import * as misc from './misc';

export default combineReducers({
  array,
  algorithm,
  currentTwoBubble,
  currentTwoSelection,
  currentTwoInsertion,
  currentTwoMerge,
  isSortRunning: misc.isSortRunning,
  sortedIndexes: misc.sortedIndexes,
  swappingIndexes: misc.swappingIndexes,
});
