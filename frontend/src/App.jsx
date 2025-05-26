import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Nav/NavBar';
import Home from "./pages/Home"
import Products from './pages/Products';
import Branches from './pages/Branches';
import Providers from './pages/Providers';

function App() {
  return (
    <>
     <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/providers" element={<Providers />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
