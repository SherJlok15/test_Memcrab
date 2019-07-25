import { connect } from 'react-redux';
import TableTd from './TableTd';
import { augment, tdMouseEnter, tdMouseLeave } from '../redux/actions';

function mapStateToProps(state, ownProps) {
  return {
    data: state.data,
    td: ownProps.td,
    trIndex: ownProps.trIndex,
    tdIndex: ownProps.tdIndex,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    augment: (trIndex, tdIndex, data) => dispatch(augment(trIndex, tdIndex, data)),
    tdMouseEnter: (innerHTML, data) => dispatch(tdMouseEnter(innerHTML, data)),
    tdMouseLeave: (data) => dispatch(tdMouseLeave(data)),
  }
}

const TableTdHandler = connect(mapStateToProps, mapDispatchToProps)(TableTd);
export default TableTdHandler
