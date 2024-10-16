import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { UserProvider } from '../src/UserContext/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    <UserProvider>    
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </UserProvider>
);
