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
import Train from "../pages/train/Train";
import Bus from "../pages/bus/Bus";
import BusList from "../pages/bus/BusList";
import Test from "../pages/test";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route element={<Test/>} path="/test" />

        <Route element={<Home/>} path="/" />
        <Route element={<Flight/>} path="/flight" />
        <Route element={<FlightList/>} path="/flightlist" />
        <Route element={<Hotels/>} path="/hotels" />
        <Route element={<HotelList/>} path="/hotellist" />
        <Route element={<Activities/>} path="/activities" />
        <Route element={<HotelDetailPage/>} path="/hoteldetailpage" />
        <Route element={<Train/>} path="/trains" />
        <Route element={<Bus/>} path="/bus" />
        <Route element={<BusList/>} path="/buslist" />
      </Routes>
      <Footer />
    </Router>
  )
  // return <div className="App">App</div>;
}

export default App; 
