import { setArray } from 'src/store/reducers/array';
import { setSwapping, setSorted } from 'src/store/reducers/misc';
import { setCurrentTwoBubble } from 'src/store/reducers/algorithm/bubbleSort';
import { toggleSortRunning } from '../store/reducers/misc';

const bubbleSort = (arr, dispatch, speed) => {
  let sortedArr = arr.slice(0);
  let n = sortedArr.length;
  let swapped = true;
  const toDispatch = [];

  while (swapped) {
    swapped = false;

    for (let i = 0; i < n - 1; i += 1) {
      toDispatch.push([i, i + 1]);

      if (sortedArr[i] > sortedArr[i + 1]) {
        toDispatch.push([i, i + 1, true]);
        const temp = sortedArr[i + 1];
        sortedArr[i + 1] = sortedArr[i];
        sortedArr[i] = temp;
        swapped = true;
        toDispatch.push(sortedArr.slice(0));
        toDispatch.push([]);
      }
    }

    toDispatch.push([true, n - 1]);
    n -= 1;
  }

  handleDispatch(toDispatch, dispatch, sortedArr, speed);
};

const handleDispatch = (toDispatch, dispatch, arr, speed) => {
  if (!toDispatch.length) {
    const finalSortCheck = (arr, i, check = []) => {
      if (i == arr.length) {
        setTimeout(() => {
          dispatch(setCurrentTwoBubble([]));
          dispatch(setSorted(arr.map((item, idx) => idx)));
          dispatch(toggleSortRunning());
        }, 900);
        return;
      }

      setTimeout(() => {
        dispatch(setCurrentTwoBubble(check.concat([i])));
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
    dispatchFunction = setCurrentTwoBubble;
  }

  dispatch(dispatchFunction(toDispatch.shift()));

  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, arr, speed);
  }, speed);
};

export default bubbleSort;
