import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Home from "../pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home/>} path="/" />
      </Routes>
    </Router>
  )
  // return <div className="App">App</div>;
}

export default App;
