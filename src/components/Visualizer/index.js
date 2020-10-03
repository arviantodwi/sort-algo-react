import { connect } from 'react-redux';
import Visualizer from './Visualizer';

const mapStateToProps = ({ array }) => ({ array });

const mapDispatchToProps = () => (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Visualizer);
