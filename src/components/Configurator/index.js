import { connect } from 'react-redux';
import { setAlgorithm } from 'src/store/reducers/algorithm';
import { setArray, addArrayElements, reduceArrayElements } from 'src/store/reducers/array';
import { toggleSortRunning } from 'src/store/reducers/misc';
import bubbleSort from 'src/helpers/bubbleSort';
import selectionSort from 'src/helpers/selectionSort';
import insertionSort from 'src/helpers/insertionSort';
import mergeSort from 'src/helpers/mergeSort';
import Configurator from './Configurator';

const generateArray = (length) => {
  const array = [];
  while (array.length < length) {
    let n = Math.floor(Math.random() * 100);
    array.push(n > 2 ? n : 2);
  }

  return array;
};

const mapStateToProps = ({ array, algorithm, isSortRunning }) => ({
  array,
  algorithm,
  isSortRunning,
});
const mapDispatchToProps = () => (dispatch) => ({
  setAlgorithm: (algo) => dispatch(setAlgorithm(algo)),

  setArray: (length) => dispatch(setArray(generateArray(length))),

  addArrayElements: (length) => dispatch(addArrayElements(generateArray(length))),

  reduceArrayElements: (length) => dispatch(reduceArrayElements(length)),

  sort: (array, algo) => {
    const startSorting =
      algo == 'bubble'
        ? bubbleSort
        : algo == 'selection'
        ? selectionSort
        : algo == 'insertion'
        ? insertionSort
        : algo == 'merge'
        ? mergeSort
        : null;
    // quick
    // heap
    dispatch(toggleSortRunning());
    startSorting(array, dispatch, 25);
    return;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Configurator);
