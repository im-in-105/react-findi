// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Etcetera from "./components/Etcetera";
// import Home from "./components/Home";
// import Split from "./components/Split";
// import Details from "./components/Details";
// import Footer from "./components/Footer";
// import Nav from "./components/Nav";
// import { BrowserRouter } from 'react-router-dom';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <BrowserRouter>  {/* BrowserRouter로 감싸주기 */}
//             <Nav />
//         </BrowserRouter>
//         <Home />
//         <Details/>
//         <Split/>
//         <Etcetera/>
//         <Footer/>
//     </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // App.jsx 연결

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
