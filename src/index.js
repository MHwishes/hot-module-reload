import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from './store'

import './index.css';
import App from './App';

const store = configureStore()

render(
  <Provider store={store}>
    <AppContainer >
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById('root')
)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
  module.hot.dispose((data) => {
    data.store = store;
  });
}

// ReactDOM.render(<App store={store}/>, document.getElementById('root'));
