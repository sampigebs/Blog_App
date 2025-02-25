import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter  } from "react-router-dom";
import { ContextProvider } from './context/Context';
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ContextProvider>
   // Rendering the main application inside React's StrictMode for highlighting potential issues
  </React.StrictMode>,
  document.getElementById('root')
);
