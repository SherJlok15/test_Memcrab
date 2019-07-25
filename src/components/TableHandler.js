import { connect } from 'react-redux';
import Table from './Table';
import { getInputRows, getInputSels, load, addNewRow, back } from '../redux/actions';

function mapStateToProps(state) {
  return {
    data: state.data,
    requestData: state.requestData,
    inputRows: state.inputRows,
    inputCels: state.inputCels,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInputRows: event => dispatch(getInputRows(event.target.value)),
    getInputCels: event => dispatch(getInputSels(event.target.value)),
    load: (rowsValue, celsValue, data) => dispatch(load(rowsValue, celsValue, data)),
    addNewRow: (data, inputCels) => dispatch(addNewRow(data, inputCels)),
    back: () => dispatch(back()),
  }
}

const TableHandler = connect(mapStateToProps, mapDispatchToProps)(Table);
export default TableHandler;
