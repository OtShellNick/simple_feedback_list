import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

import App from '@components/App';

// import { setupStore } from '@store/mainStore';

import 'normalize.css';
import '@style/main.scss';

// const store = setupStore();

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    // </Provider>,
  );
}
