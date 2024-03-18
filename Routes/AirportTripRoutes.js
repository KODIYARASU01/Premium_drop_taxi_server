let express = require("express");
let AirportTripBooking = require("../models/airportTripModel");
let cors = require("cors");
let router = express.Router();

router.use(cors());
//Route fot save new booking :

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.TripType ||
      !req.body.AirportPickUp ||
      !req.body.AirportDropUp ||
      !req.body.AirportDate ||
      !req.body.AirportTime ||
      !req.body.AirportName
    ) {
      return res.status(400).send({
        message:
          "Send all required fields : TripType,AirportpickUp , AirportdropUp , Airportdate,Airporttime , AirportName",
      });
    }

    const newAirportTripBooking = {
      TripType: req.body.TripType,
      AirportPickUp: req.body.AirportPickUp,
      AirportDropUp: req.body.AirportDropUp,
      AirportDate: req.body.AirportDate,
      AirportTime: req.body.AirportTime,
      AirportName: req.body.AirportName,
    };

    const AirportBooking = await AirportTripBooking.create(
      newAirportTripBooking
    );

    return res.status(201).send(AirportBooking);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route forget all booking :

router.get("/", async (req, res) => {
  try {
    const AirportBookings = await AirportTripBooking.find({});

    return res.status(200).json({
      count: AirportBookings.length,
      data: AirportBookings,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for Delete a booking:

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await AirportTripBooking.findByIdAndDelete(id);

    if (!result) {
      return res
        .status(404)
        .json({ message: "Airport Trip Booking not found" });
    }
    return res
      .status(200)
      .send({ message: "Airport Trip Booking deleted succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
