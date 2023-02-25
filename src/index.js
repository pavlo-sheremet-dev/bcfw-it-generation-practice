import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { App, Media } from 'components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Media>
            <App />
          </Media>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
