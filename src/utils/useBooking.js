import { createContext, useContext, useEffect, useState } from "react";

const BookingContext = createContext();

const getBookingOrg = () => {
  try {
    return JSON.parse(localStorage.getItem("booking")) || [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

const setBookingOrg = (data) => {
  localStorage.setItem("booking", JSON.stringify(data));
};

const BookingProvider = ({ children }) => {
  const [booking, setBooking_] = useState(getBookingOrg());

  useEffect(() => {
    setBookingOrg(booking);
  }, [booking]);

  useEffect(() => {
    setBooking_(getBookingOrg());
  }, []);

  const setBooking = ({ type, id, name, extra, price, userName }) => {
    setBooking_((prev) => [
      { type, id, name, extra, price, userName, date: new Date() },
      ...prev,
    ]);
  };

  return (
    <BookingContext.Provider
      value={{
        setBooking,
        booking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;

export const useBooking = () => {
  return useContext(BookingContext);
};
