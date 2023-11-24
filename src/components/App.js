import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Home from "../pages/Home";
import Header from "./header/Header";
import Flight from "../pages/Flight";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Flight/>} path="/flight" />
      </Routes>
    </Router>
  )
  // return <div className="App">App</div>;
}

export default App;
