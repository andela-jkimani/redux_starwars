import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App.js';
import { AppContainer } from 'react-hot-loader';

require('index.html');

const container = document.getElementById('#app-container');

ReactDOM(
  <AppContainer>
    <App />
  </AppContainer>, container);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>, container
    );
  });
}
