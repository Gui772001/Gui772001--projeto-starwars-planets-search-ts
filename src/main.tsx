import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserProvider from './Context/UserProvider';

ReactDOM

  .createRoot(document.getElementById('root') as HTMLElement)

  .render(
    <UserProvider>
      <App />
      ,
    </UserProvider>,
  );
