import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components';
import { ServiceWorker } from './utils';
import Store from './store';
import './index.css';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}><App /></Provider>,
  document.getElementById('root'),
);

ServiceWorker.register();
