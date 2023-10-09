'use strict';

import './index.css';
import App from './App';

ReactDOM.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, { type: 'language', language: 'javascript' })
  ),
  document.querySelector('#like_button_container')
);