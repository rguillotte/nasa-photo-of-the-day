import React from "react";
import "./App.css";
import PhotoCard from "./components/PhotoCard";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <PhotoCard />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
