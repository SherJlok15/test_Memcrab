import React from 'react';
import TableTrHandler from './TableTrHandler';

function Table(props) {
  if (!props.requestData) {
    return (
      <div className="initial-container">
        <label>Rows:
          <input type="text" value={props.inputRows} onChange={(event) => props.getInputRows(event)}/>
        </label>
        <label>Cels:
          <input type="text" value={props.inputCels} onChange={(event) => props.getInputCels(event)}/>
        </label>
        <button
          type="button" onClick={() => props.load(props.inputRows, props.inputCels, props.data)}>&#10148;
        </button>
      </div>
    )
  }
  if (props.requestData) {
    return(
      <div className="table-container">
      <button type="button" onClick={() => props.back()}>&#8617;</button>
      <table>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>
              <span onClick={() => props.addNewRow(props.data, props.inputCels)}>&#10010;</span>
            </td>
          </tr>
          {props.data.map((item, index) => <TableTrHandler tr={item} trIndex={index}/>)}
        </tbody>
      </table>
    </div>
    )
  }
}

export default Table;
