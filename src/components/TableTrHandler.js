import { connect } from 'react-redux';
import TableTr from './TableTr';
import { remove, sumMouseEnter, sumMouseLeave } from '../redux/actions';

function mapStateToProps(state, ownProps) {
  return {
    data: state.data,
    tr: ownProps.tr,
    trIndex: ownProps.trIndex,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    remove: (data, trIndex) => dispatch(remove(data, trIndex)),
    sumMouseEnter: (innerHTML, trIndex, data) => dispatch(sumMouseEnter(innerHTML, trIndex, data)),
    sumMouseLeave: (innerHTML, trIndex, data) => dispatch(sumMouseLeave(innerHTML, trIndex, data)),
  }
}

const TableTrHandler = connect(mapStateToProps, mapDispatchToProps)(TableTr);
export default TableTrHandler;
