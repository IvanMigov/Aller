import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Async from './middlewares/async';
import Routes from './router';
import './style/style.css';
const App = () => {
  const createStoreWithMiddleware = applyMiddleware(Async)(createStore);
  const store = createStoreWithMiddleware(reducers);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
