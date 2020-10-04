import { connect } from 'react-redux';
import { setAlgorithm } from 'src/store/reducers/algorithm';
import { setArray } from 'src/store/reducers/array';
import { addArrayElements } from 'src/store/reducers/array';
import { reduceArrayElements } from 'src/store/reducers/array';
import Configurator from './Configurator';

const generateArray = (length) => {
  const array = [];
  while (array.length < length) {
    let n = Math.floor(Math.random() * 100);
    array.push(n > 2 ? n : 2);
  }

  return array;
};

const mapStateToProps = ({ array }) => ({ array });
const mapDispatchToProps = () => (dispatch) => ({
  setAlgorithm: (algo) => dispatch(setAlgorithm(algo)),

  setArray: (length) => dispatch(setArray(generateArray(length))),

  addArrayElements: (length) => dispatch(addArrayElements(generateArray(length))),

  reduceArrayElements: (length) => dispatch(reduceArrayElements(length)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Configurator);
