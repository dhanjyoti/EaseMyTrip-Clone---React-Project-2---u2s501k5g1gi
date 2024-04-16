import http from "./http";

const login = async ({ data }) => {
  return (await http.post("bookingportals/login", data)).data;
};
const signup = async ({ data }) => {
  return (await http.post("bookingportals/signup", data)).data;
};

const searchFlights = async ({ src, dest, day }) => {
  return (
    await http.get(
      `bookingportals/flight?search={"source":"${src}","destination":"${dest}"}&day=${day}`
    )
  ).data;
};

const searchHotels = async ({ location }) => {
  return await http.get(
    `bookingportals/hotel?search={"location":"${location}"}`
  );
};

const searchTrains = async ({ src, dest, day }) => {
  return await http.get(
    `bookingportals/train?search={"source":"${src}","destination":"${dest}"}&day=${day}`
  );
};

const searchBuses = async ({ src, dest, day }) => {
  return await http.get(
    `bookingportals/bus?search={"source":"${src}","destination":"${dest}"}&day=${day}`
  );
};

const hotelDetail = async ({ id }) => {
  return await http.get(`bookingportals/hotel/${id}`);
};

const flightDetail = async ({ id }) => {
  return await http.get(`bookingportals/flight/${id}`);
};
const trainDetail = async ({ id }) => {
  return await http.get(`bookingportals/train/${id}`);
};

const flightFilterPrice = async ({
  src,
  dest,
  day,
  lowerPrice,
  upperPrice,
}) => {
  return await http.get(
    `bookingportals/flight?search={"source":"${src}","destination":"${dest}"}&day=${day}&filter={"ticketPrice":{"$lte":${lowerPrice},"$gte":${upperPrice}}}`
  );
};

const filterFlights = async ({
  src,
  dest,
  day,
  lowerPrice,
  upperPrice,
  stops,
}) => {
  let f = ``;
  let st = ``;
  if (stops !== undefined) {
    st = `"stops":{"$eq":${stops}}`;
    if (stops == 2) {
      st = `"stops":{"$gte":${stops}}`;
    }
    if (f) {
      f = f + "," + st;
    } else {
      f = st;
    }
  }

  let pr = ``;

  if (lowerPrice || upperPrice) {
    pr = `"ticketPrice":{"$lte":${lowerPrice},"$gte":${upperPrice}}`;
    if (f) {
      f = f + "," + pr;
    } else {
      f = pr;
    }
  }

  return await http.get(
    `bookingportals/flight?search={"source":"${src}","destination":"${dest}"}&day=${day}&filter={${f}}`
  );
};

const filterTrains = async ({
  src,
  dest,
  day,
  lowerPrice,
  upperPrice,
  type,
}) => {
  let f = ``;

  let pr = ``;

  if (lowerPrice || upperPrice) {
    pr = `"fare":{"$lte":${lowerPrice},"$gte":${upperPrice}}`;
    if (f) {
      f = f + "," + pr;
    } else {
      f = pr;
    }
  }

  let tp = ``;

  if (type) {
    tp = `"trainType":${type}`;
    if (f) {
      f = f + "," + tp;
    } else {
      f = tp;
    }
  }

  return await http.get(
    `bookingportals/train?search={"source":"${src}","destination":"${dest}"}&day=${day}&filter={${f}}`
  );
};

const filterBus = async ({ src, dest, day, lowerPrice, upperPrice, type }) => {
  let f = ``;

  let pr = ``;

  if (lowerPrice || upperPrice) {
    pr = `"fare":{"$lte":${lowerPrice},"$gte":${upperPrice}}`;
    if (f) {
      f = f + "," + pr;
    } else {
      f = pr;
    }
  }

  let tp = ``;

  if (type) {
    tp = `"type":${type}`;
    if (f) {
      f = f + "," + tp;
    } else {
      f = tp;
    }
  }

  return await http.get(
    `bookingportals/bus?search={"source":"${src}","destination":"${dest}"}&day=${day}&filter={${f}}`
  );
};

const filterHotels = async ({ location, price, rating }) => {
  let f = ``;
  let pr = ``;
  let rate = ``;

  if (price) {
    pr = `"costPerNight":{${price}}`;
    if (f) {
      f = f + "," + pr;
    } else {
      f = pr;
    }
  }

  if (rating) {
    rate = `"rating":{${rating}}`;
    if (f) {
      f = f + "," + rate;
    } else {
      f = rate;
    }
  }

  return await http.get(
    `bookingportals/hotel?search={"location":"${location}"}&filter={${f}}`
  );
};

const api = {
  login,
  signup,
  searchFlights,
  searchHotels,
  searchTrains,
  searchBuses,
  hotelDetail,
  flightDetail,
  trainDetail,
  flightFilterPrice,
  filterFlights,
  filterHotels,
  filterTrains,
  filterBus,
};

export default api;
