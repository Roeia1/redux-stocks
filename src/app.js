import 'babel-polyfill';
import React from 'react';
import axios from 'axios';
import {render} from 'react-dom';
import {wixAxiosConfig} from 'wix-axios-config';
import App from './components/App';
import Store from './components/Store/Store';
import {Provider} from 'react-redux';

const baseUrl = window.__BASEURL__;

wixAxiosConfig(axios, {baseURL: baseUrl});

const renderApp = () => {
  render(
    <Provider store={Store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
};

Store.subscribe(renderApp);

renderApp();

