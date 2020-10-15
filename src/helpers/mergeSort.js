import { setArray } from 'src/store/reducers/array';
import { setSwapping, setSorted } from 'src/store/reducers/misc';
import { setCurrentTwoMerge } from 'src/store/reducers/algorithm/mergeSort';
import { toggleSortRunning } from 'src/store/reducers/misc';

let workingArr = [];

const merge = (first, second, toDispatch, startIndex) => {
  let sortedArr = [];
  let pointer = startIndex;
  const head = workingArr.slice(0, startIndex);
  while (first.length && second.length) {
    toDispatch.push([first[0][1], second[0][1]]);

    if (first[0][0] <= second[0][0]) {
      pointer += 1;
      sortedArr.push(first.shift());
    } else {
      toDispatch.push([first[0][1], second[0][1], true]);
      second[0][1] = pointer++;
      sortedArr.push(second.shift());
      first.forEach((subArr) => subArr[1]++);

      workingArr = head
        .concat(sortedArr.map((value) => value[0]))
        .concat(first.map((value) => value[0]))
        .concat(second.map((value) => value[0]))
        .concat(workingArr.slice(startIndex + sortedArr.length + first.length + second.length));
      toDispatch.push(workingArr.slice(0));
      toDispatch.push([]);
    }

    if (sortedArr.length + first.length + second.length === workingArr.length) {
      toDispatch.push([true, pointer - 1]);
    }
  }

  sortedArr = sortedArr.concat(first).concat(second);
  workingArr = head
    .concat(sortedArr.map((value) => value[0]))
    .concat(workingArr.slice(startIndex + sortedArr.length));
  toDispatch.push(workingArr.slice(0));
  toDispatch.push([]);

  if (sortedArr.length === workingArr.length) {
    sortedArr = sortedArr.map((value) => value[0]);

    if (pointer < workingArr.length) {
      while (pointer < workingArr.length) {
        toDispatch.push([true, pointer++]);
      }
    }
  }

  return sortedArr;
};

const split = (arr, startIndex, endIndex, toDispatch) => {
  if (arr.length === 1) {
    return arr;
  }

  const half = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half);
  const medianIndex = Math.ceil((startIndex + endIndex) / 2);
  const actualFirst = split(firstHalf, startIndex, medianIndex - 1, toDispatch);
  const actualSecond = split(secondHalf, medianIndex, endIndex, toDispatch);

  return merge(actualFirst, actualSecond, toDispatch, startIndex, endIndex);
};

const mergeSort = (arr, dispatch, speed) => {
  const toDispatch = [];
  workingArr = arr.slice(0);
  // console.log(arr.map((value, index) => [value, index]));
  const sortedArray = split(
    arr.map((value, index) => [value, index]),
    0,
    arr.length - 1,
    toDispatch
  );

  handleDispatch(toDispatch, dispatch, sortedArray, speed);
};

const handleDispatch = (toDispatch, dispatch, arr, speed) => {
  if (!toDispatch.length) {
    const finalSortCheck = (arr, i, check = []) => {
      if (i == arr.length) {
        setTimeout(() => {
          dispatch(setCurrentTwoMerge([]));
          dispatch(setSorted(arr.map((item, idx) => idx)));
          dispatch(toggleSortRunning());
        }, 900);
        return;
      }

      setTimeout(() => {
        dispatch(setCurrentTwoMerge(check.concat([i])));
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
    dispatchFunction = setCurrentTwoMerge;
  }

  dispatch(dispatchFunction(toDispatch.shift()));

  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, arr, speed);
  }, speed);
};

export default mergeSort;
