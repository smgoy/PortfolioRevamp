import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/app';

import '../stylesheets/base'

const renderApp = Application => {
  render(
    <AppContainer>
      <Application />
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    const newApp = require('./components/app').default;
    renderApp(newApp);
  });
}
