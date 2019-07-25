export const GET_INPUT_ROWS = 'get_input_rows';
export const GET_INPUT_CELS = 'get_input_cels';
export const LOAD = 'load';
export const REMOVE = 'remove';
export const ADD_NEW_ROW = 'add_new_row';
export const AUGMENT = 'augment';
export const SUM_MOUSE_ENTER = 'sum_mouse_enter';
export const SUM_MOUSE_LEAVE = 'sum_mouse_leave';
export const BACK = 'back';
export const TD_MOUSE_ENTER = 'td_mouse_enter';
export const TD_MOUSE_LEAVE = 'td_mouse_leave';

let increment = 1;

function generate(rows, cols, array) {
  let arr = [];
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < cols; j++) {
      arr[i][j] = {
        id: increment++,
        amount: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
        hoverPercent: 0,
        closeMeaning: false,
      }
    }
  }
  for (let o of arr) {
    array.unshift(o);
  }
}

function calculateColumn(array) {
  if (array.length > 0) {
    let resRow = []
    const columns = array[0].length

    for (let j = 0; j < columns; j++) {
      let columnTotal = 0
      for (let i = 0; i < array.length; i++) {
        columnTotal += array[i][j].amount
      }
      let columnAverage = Math.floor(columnTotal / array.length)
      resRow.push({
        id: increment++,
        amount: columnAverage,
        hoverPercent: 0,
        closeMeaning: false,
      })
    }
    array.splice(array.length, resRow.length, resRow)
  }
}

export function getInputRows(value) {
  if (!isNaN(value)) {
    return {
      type: GET_INPUT_ROWS,
      value: value.trim(),
    }
  } else {
    return {
      type: GET_INPUT_ROWS,
      value: '',
    }
  }
};

export function getInputSels(value) {
  if (!isNaN(value)) {
    return {
      type: GET_INPUT_CELS,
      value: value.trim(),
    }
  } else {
    return {
      type: GET_INPUT_CELS,
      value: '',
    }
  }
};

export function load(rowsValue, celsValue, data) {
  generate(rowsValue, celsValue, data);
  calculateColumn(data)
  return {
    type: LOAD,
    data: data,
  }
};

export function remove(data, trIndex) {
  const newData = [...data].filter((item, index) => index !== trIndex);
  newData.pop()
  calculateColumn(newData);
    return {
    type: REMOVE,
    data: newData,
  }
};

export function addNewRow(data, inputCels) {
    const newData = [...data]
    generate(1, inputCels, newData);
      newData.pop()
      calculateColumn(newData);
    return {
    type: ADD_NEW_ROW,
    value: newData,
  }
};

export function augment(trIndex, tdIndex, data) {
  const newData = [...data].map((item, index) => {
    if (index === trIndex) {
      item.map((item, index) => {
        if (index === tdIndex) {
          item.amount += 1;
          return item;
        } else {
          return item
        }
      })
    }
      return item
  })
  newData.pop()
  calculateColumn(newData);
    return {
    type: AUGMENT,
    data: newData,
  }
};

export function sumMouseEnter(innerHTML, trIndex, data) {
    const newData = [...data].map((item, index) => {
      if (index === trIndex) {
        item.map(item => item.hoverPercent = innerHTML)
      }
      return item
    })
    return {
    type: SUM_MOUSE_ENTER,
    data: newData,
  }
};

export function sumMouseLeave(innerHTML, trIndex, data) {
    const newData = [...data].map((item, index) => {
      if (index === trIndex) {
        item.map(item => item.hoverPercent = 0)
      }
      return item
    })
    return {
    type: SUM_MOUSE_LEAVE,
    data: newData,
  }
};

export function back() {
    return {
    type: BACK,
  }
};

export function tdMouseEnter(innerHTML, data) {
  const newData = [...data].map((item, index) => {
    item.map((item) => {
      let result = innerHTML - item.amount;
      if (result < 50 && result > -50) {
        item.closeMeaning = true
        return item
      }
    })
    return item
  })
    return {
    type: TD_MOUSE_ENTER,
    data: newData,
  }
};

export function tdMouseLeave(data) {

  const newData = [...data].map((item, index) => {
    item.map((item) => {
        item.closeMeaning = false
        return item
    })
    return item
  })
    return {
    type: TD_MOUSE_LEAVE,
    data: newData,
  }
};
