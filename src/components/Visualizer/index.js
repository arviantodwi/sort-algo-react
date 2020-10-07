import { connect } from 'react-redux';
import Visualizer from './Visualizer';

const mapStateToProps = ({
  array,
  sortedIndexes,
  swappingIndexes,
  currentTwoBubble,
  currentTwoSelection,
  isSortRunning,
}) => ({
  array,
  sortedIndexes,
  swappingIndexes,
  currentTwoBubble,
  currentTwoSelection,
  isSortRunning,
});

const mapDispatchToProps = () => (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Visualizer);
