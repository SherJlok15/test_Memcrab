import {
  GET_INPUT_ROWS,
  GET_INPUT_CELS,
  LOAD, REMOVE,
  ADD_NEW_ROW,
  AUGMENT,
  SUM_MOUSE_ENTER,
  SUM_MOUSE_LEAVE,
  BACK,
  TD_MOUSE_ENTER,
  TD_MOUSE_LEAVE,
} from './actions';

const initialState = {
  data: [],
  requestData: false,
  inputRows: '',
  inputCels: '',
}

export default function getNextState(state = initialState, action) {
  switch (action.type) {
    case GET_INPUT_ROWS:
      return {
        ...state,
        inputRows: action.value,
      };
    case GET_INPUT_CELS:
      return {
        ...state,
        inputCels: action.value,
      };
    case LOAD:
      if (state.inputRows !== '' && state.inputCels !== '') {
        return {
          ...state,
          requestData: true,
          data: action.data,
        };
      } else {
        return {
          ...state,
          requestData: false,
        }
      }
    case REMOVE:
      return {
        ...state,
        data: action.data,
      };
    case ADD_NEW_ROW:
      return {
        ...state,
        data: action.value,
        };
      case AUGMENT:
        return {
          ...state,
          data: action.data,
          };
      case SUM_MOUSE_ENTER:
        return {
          ...state,
          data: action.data,
        };
      case SUM_MOUSE_LEAVE:
        return {
          ...state,
          data: action.data,
        };
      case BACK:
        return {
          ...state,
          requestData: false,
          data: [],
        };
      case TD_MOUSE_ENTER:
        return {
          ...state,
          data: action.data,
        };
      case TD_MOUSE_LEAVE:
      return {
            ...state,
          data: action.data,
        };
    default:
      return state;
  }
}
