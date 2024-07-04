import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

const rootElement = document.getElementById('root');
render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);