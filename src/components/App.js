import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import { UserProvider } from "../utils/useUser";
import TrainList from "../pages/train/trainlist";
import FlightBooking from "../pages/flight/FlightBooking";
import UnderConstruction from "../pages/underconstruction/underconstruction";
import TrainBooking from "../pages/train/TrainBooking";
import AuthProvider from "../utils/useAuth";
import HotelBooking from "../pages/hotel/HotelBooking";

function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route element={<Test />} path="/test" />
            <Route element={<Home />} path="/*" />
            <Route element={<Flight />} path="/flight" />
            <Route element={<FlightList />} path="/flightlist" />
            <Route element={<Hotels />} path="/hotels" />
            <Route element={<HotelList />} path="/hotellist" />
            <Route element={<Activities />} path="/activities" />
            <Route element={<HotelDetailPage />} path="/hoteldetailpage" />
            <Route element={<HotelBooking />} path="/hotel-booking" />
            <Route element={<Train />} path="/trains" />
            <Route element={<TrainList />} path="/trainlist" />
            <Route element={<Bus />} path="/bus" />
            <Route element={<BusList />} path="/buslist" />
            <Route element={<FlightBooking />} path="/flight-booking" />
            <Route element={<TrainBooking />} path="/train-booking" />
            <Route element={<UnderConstruction />} path="/under-construction" />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </UserProvider>
  );
  // return <div className="App">App</div>;
}

export default App;
