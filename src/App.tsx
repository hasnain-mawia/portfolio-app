import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
