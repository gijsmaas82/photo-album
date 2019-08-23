import React from 'react';

import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import AlbumsListContainer from './components/AlbumsListContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <AlbumsListContainer />
      </Provider>
    </div>
  );
}

export default App;
