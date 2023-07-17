import * as ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import React, { createContext } from 'react';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


