import React from 'react';

function TableTd(props) {
  let redColorPercent = 0;
  if (props.td.hoverPercent !== 0) {
    redColorPercent =  Math.round(props.td.amount * 100 / props.td.hoverPercent);
  }
  return (
    <td
       style={props.td.hoverPercent !== 0 ?
        {background: `linear-gradient(to top, red ${redColorPercent}%, white 0)`} :
        {backgroundColor: 'white'}}
       onClick={() => props.augment(props.trIndex, props.tdIndex, props.data)}
       onMouseEnter={(event) => props.tdMouseEnter(event.target.innerHTML, props.data)}
       onMouseLeave={() => props.tdMouseLeave(props.data)}
       className={props.td.closeMeaning ? 'redColor' : ''}>
       {props.td.hoverPercent !== 0 ? `${redColorPercent}%` : props.td.amount}
    </td>
  )
}

export default TableTd;
