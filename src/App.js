import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/Home";
import { useState } from "react";

function App() {
  const [sidenavbar, setSidenavbar] = useState(true);
  const setSidenavbarFunc = (value) => {
    setSidenavbar(value);
  };
  return (
    <div className="App">
      <Home sidenavbar={sidenavbar} />
      <Navbar setSidenavbar={setSidenavbarFunc} sidenavbar={sidenavbar} />
    </div>
  );
}

export default App;
