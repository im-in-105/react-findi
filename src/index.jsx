import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // App.jsx 연결

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter> {/* 여기로 감싸야 useLocation() 등 라우터 훅 사용 가능 */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
