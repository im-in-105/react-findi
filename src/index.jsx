import React from 'react';
import ReactDOM from 'react-dom/client';
import Etcetera from "./components/Etcetera";
import Home from "./components/Home";
import Split from "./components/Split";
import Details from "./components/Details";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
      <Details/>
      <Split/>
      <Etcetera/>
      <Footer/>
  </React.StrictMode>
);
