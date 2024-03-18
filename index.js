let express = require("express");
let mongoose = require("mongoose");
let MONGODB_URL = require("./config");
require("dotenv").config();
let axios = require("axios");

const cors = require("cors");
//Imported router paths file :
let vehicleRoute = require("./Routes/VehicleRoutes");
let bookingRoute = require("./Routes/BookingRoutes");
let RoundTripRoute = require("./Routes/RoundTripRoute");
let LocalTripRoute = require("./Routes/LocalTripRoutes");
let AirportTripRoute = require("./Routes/AirportTripRoutes");
let app = express();
//Middleware for handling cors policy
// Allow requests only from http://example.com
// app.use(cors({
//   origin: 'http://taxi.getbizlist.com',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // Enable credentials (if needed)
//   optionsSuccessStatus: 204, // Handle preflight requests (status code for OPTIONS request)
// }));
app.use(cors(
  
))

//Port  :
let PORT = process.env.PORT || 5000;

//Middleware for parsing request body :
app.use(express.json());

//Home page root path :
app.get("/", (req, res) => {
  return res.status(200).send("Welcome to MERN Stack project");
});

//Router main path imported :
app.use("/vehicles", vehicleRoute);
app.use("/bookings", bookingRoute);
app.use("/roundTripBookings", RoundTripRoute);
app.use("/localTripBookings", LocalTripRoute);
app.use("/airportTripBookings", AirportTripRoute);

//MongoDb connection :
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Server listening ${PORT} port number`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
