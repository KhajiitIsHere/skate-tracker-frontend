import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import TricksContextProvider from "./store/tricks-context";
import UserContextProvider from "./store/user-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserContextProvider>
                <TricksContextProvider>
                    <App/>
                </TricksContextProvider>
            </UserContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

