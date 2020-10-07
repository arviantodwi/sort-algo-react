import { setArray } from 'src/store/reducers/array';
import { setSwapping, setSorted } from 'src/store/reducers/misc';
import { setCurrentTwoSelection } from 'src/store/reducers/algorithm/selectionSort';
import { toggleSortRunning } from '../store/reducers/misc';

const selectionSort = (arr, dispatch, speed) => {
  const sortedArr = arr.slice(0);
  const toDispatch = [];
  let i = 0;
  let j, minimumIndex;

  while (i < sortedArr.length) {
    j = i + 1;
    minimumIndex = i;

    while (j < sortedArr.length) {
      toDispatch.push([i, j]);
      if (sortedArr[j] < sortedArr[minimumIndex]) {
        toDispatch.push([i, j, true]);
        minimumIndex = j;
      }
      j += 1;
    }

    if (minimumIndex > i) {
      const temp = sortedArr[i];
      sortedArr[i] = sortedArr[minimumIndex];
      sortedArr[minimumIndex] = temp;
      toDispatch.push(sortedArr.slice(0));
      toDispatch.push([]);
    }

    toDispatch.push([true, i]);
    i += 1;
  }

  handleDispatch(toDispatch, dispatch, sortedArr, speed);
};

const handleDispatch = (toDispatch, dispatch, arr, speed) => {
  if (!toDispatch.length) {
    const finalSortCheck = (arr, i, check = []) => {
      if (i == arr.length) {
        setTimeout(() => {
          dispatch(setCurrentTwoSelection([]));
          dispatch(setSorted(arr.map((item, idx) => idx)));
          dispatch(toggleSortRunning());
        }, 900);
        return;
      }

      setTimeout(() => {
        dispatch(setCurrentTwoSelection(check.concat([i])));
        finalSortCheck(arr, i + 1, check.concat([i]));
      }, speed);
    };

    return finalSortCheck(arr, 0);
  }

  let dispatchFunction = null;
  if (toDispatch[0].length > 3) {
    dispatchFunction = setArray;
  } else if (toDispatch[0].length == 3 || !toDispatch[0].length) {
    dispatchFunction = setSwapping;
  } else if (toDispatch[0].length == 2 && toDispatch[0][0] === true) {
    dispatchFunction = setSorted;
  } else {
    dispatchFunction = setCurrentTwoSelection;
  }

  dispatch(dispatchFunction(toDispatch.shift()));

  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, arr, speed);
  }, speed);
};

export default selectionSort;
