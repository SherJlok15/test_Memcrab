import React from 'react';
import TableTdHandler from './TableTdHandler';

function TableTr(props) {
  let mySum = 0;
  return (
    <tr>
      {props.tr.map((item, index) => {
        mySum += item.amount
        return <TableTdHandler td={item} key={item.id} tdIndex={index} trIndex={props.trIndex}/>
      })}
      <td onMouseEnter={(event) => props.sumMouseEnter(event.target.innerHTML, props.trIndex, props.data)}
          onMouseLeave={(event) => props.sumMouseLeave(event.target.innerHTML, props.trIndex, props.data)}>
          {mySum}
      </td>
      <span onClick={() => props.remove(props.data, props.trIndex)}>&#10006;</span>
    </tr>
  )
}

export default TableTr;
