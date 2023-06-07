import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './stylesheets/Navbar.css'
import './App.css'
import './stylesheets/Sidebar.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

