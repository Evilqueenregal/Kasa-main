import React from "react";
import Header from "./components/Header.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import Thumb from "./components/Thumbs.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Thumb />
      <Footer />
    </div>
  )
}

export default App