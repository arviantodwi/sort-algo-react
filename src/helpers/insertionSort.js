import { setArray } from 'src/store/reducers/array';
import { setSwapping, setSorted } from 'src/store/reducers/misc';
import { setCurrentTwoInsertion } from 'src/store/reducers/algorithm/InsertionSort';
import { toggleSortRunning } from 'src/store/reducers/misc';

const insertionSort = (arr, dispatch, speed) => {
  const sortedArr = arr.slice(0);
  const toDispatch = [];
  let i = 1;
  let j;

  while (i < sortedArr.length) {
    const nextLower = sortedArr[i];
    j = i - 1;
    toDispatch.push([j, i]);

    while (j >= 0 && sortedArr[j] > nextLower) {
      sortedArr[j + 1] = sortedArr[j];
      toDispatch.push([j, j + 1, true]);
      j -= 1;
    }

    sortedArr[j + 1] = nextLower;
    toDispatch.push(sortedArr.slice(0));
    toDispatch.push([]);
    toDispatch.push([true, i - 1]);
    if (i === sortedArr.length - 1) {
      toDispatch.push([true, i]);
    }

    i += 1;
  }

  handleDispatch(toDispatch, dispatch, arr, speed);
};

const handleDispatch = (toDispatch, dispatch, arr, speed) => {
  if (!toDispatch.length) {
    const finalSortCheck = (arr, i, check = []) => {
      if (i == arr.length) {
        setTimeout(() => {
          dispatch(setCurrentTwoInsertion([]));
          dispatch(setSorted(arr.map((item, idx) => idx)));
          dispatch(toggleSortRunning());
        }, 900);
        return;
      }

      setTimeout(() => {
        dispatch(setCurrentTwoInsertion(check.concat([i])));
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
    dispatchFunction = setCurrentTwoInsertion;
  }

  dispatch(dispatchFunction(toDispatch.shift()));

  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, arr, speed);
  }, speed);
};

export default insertionSort;
