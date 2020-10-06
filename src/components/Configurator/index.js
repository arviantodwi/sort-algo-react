import { connect } from 'react-redux';
import { setAlgorithm } from 'src/store/reducers/algorithm';
import { setArray, addArrayElements, reduceArrayElements } from 'src/store/reducers/array';
import { toggleSortRunning } from 'src/store/reducers/misc';
import bubbleSort from 'src/helpers/bubbleSort';
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
    const startSorting = algo == 'bubble' ? bubbleSort : null;
    dispatch(toggleSortRunning());
    startSorting(array, dispatch, 5);
    return;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Configurator);
