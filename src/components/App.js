import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "../styles/App.css";
import Home from "../pages/Home";
import Header from "./header/Header";
import Flight from "../pages/Flight";
import Footer from "./footer/Footer";
import FlightList from "../pages/FlightList";
import Activities from "../pages/Activities";
import Hotels from "../pages/Hotels";
import HotelList from "../pages/HotelList";
import HotelDetailPage from "./hotel_list/HotelDetailPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Flight/>} path="/flight" />
        <Route element={<FlightList/>} path="/flightlist" />
        <Route element={<Hotels/>} path="/hotels" />
        <Route element={<HotelList/>} path="/hotellist" />
        <Route element={<Activities/>} path="/activities" />
        <Route element={<HotelDetailPage/>} path="/hoteldetailpage" />
      </Routes>
      <Footer />
    </Router>
  )
  // return <div className="App">App</div>;
}

export default App; 
