import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { App, Media } from 'components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Media>
      <App />
    </Media>
  </React.StrictMode>,
);
