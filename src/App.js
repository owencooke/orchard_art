import './App.css';
import React from "react";
import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  function LayoutsWithNavbar() {
    return (
      <>
        <Navbar />
        <Outlet /> 
        {/* Footer */}
      </>
    );
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutsWithNavbar />}>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
