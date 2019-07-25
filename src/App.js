import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import getNextState from './redux/redusers';
import TableHandler from './components/TableHandler';


import './App.css';

const store = createStore(getNextState);

function App() {
  return (
    <Provider store={store}>
      <TableHandler />
    </Provider>
  );
}

export default App;
