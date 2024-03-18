let mongoose = require("mongoose");
//Creating Booking schema:

const airportBookingSchema = mongoose.Schema(
  {
    TripType: {
      type: String,
      required: true,
    },
    AirportPickUp: {
      type: String,
      required: true,
    },
    AirportDropUp: {
      type: String,
      required: true,
    },
    AirportDate: {
      type: String,
      required: true,
    },
    AirportTime: {
      type: String,
      required: true,
    },
    AirportName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AirportTrip = mongoose.model("AirportTrip", airportBookingSchema);

module.exports = AirportTrip;
