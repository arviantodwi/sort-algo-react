import { connect } from 'react-redux';
import Visualizer from './Visualizer';

const mapStateToProps = ({
  array,
  sortedIndexes,
  swappingIndexes,
  currentTwoBubble,
  currentTwoSelection,
  currentTwoInsertion,
  currentTwoMerge,
  isSortRunning,
}) => ({
  array,
  sortedIndexes,
  swappingIndexes,
  currentTwoBubble,
  currentTwoSelection,
  currentTwoInsertion,
  currentTwoMerge,
  isSortRunning,
});

const mapDispatchToProps = () => (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Visualizer);
