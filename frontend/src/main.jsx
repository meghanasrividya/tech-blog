import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // new method in React 18
import './index.css'; // global styles (CSS file)
import App from './App.jsx'; // main App component

// Create a root element and render the app to the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Enables extra checks and warnings during development */}
    <App />  {/* The root component */}
  </StrictMode>
);
