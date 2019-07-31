import React from "react";
import "./App.css";
import PhotoCard from "./components/PhotoCard";
import Header from "./components/Header";


function App() {
  return (
    <div className="container" className="App">
      <Header />
      <PhotoCard />
    </div>
  );
}

export default App;
