import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Home from "../pages/Home";
import Header from "./header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home/>} path="/" />
      </Routes>
    </Router>
  )
  // return <div className="App">App</div>;
}

export default App;
