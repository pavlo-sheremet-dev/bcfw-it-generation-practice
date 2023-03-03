import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { App, Media } from 'components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import 'services/i18next';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Media>
            <Suspense fallback="langs">
              <App />
            </Suspense>
          </Media>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
