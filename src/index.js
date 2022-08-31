import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "./Context.js";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
