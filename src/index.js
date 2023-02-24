import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { App, Media } from 'components';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Media>
        <App />
      </Media>
    </BrowserRouter>
  </React.StrictMode>,
);
