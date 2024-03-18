let express = require("express");
let RoundTrip = require("../models/roundTripModel");

let router = express.Router();

//Route for save RoundTrip :

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.RoundTripName ||
      !req.body.RoundPickUp ||
      !req.body.RoundDropUp ||
      !req.body.fromDate ||
      !req.body.toDate ||
      !req.body.RoundTime
    ) {
      return res.status(400).send({
        message:
          "Send all required fields :RoundTripName, RoundPickUp , RoundDropUp , fromDate, toDate,RoundTime",
      });
    }

    const newRoundTripBooking = {
      RoundTripName :req.body.RoundTripName,
      RoundPickUp: req.body.RoundPickUp,
      RoundDropUp: req.body.RoundDropUp,
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      RoundTime: req.body.RoundTime,
    };

    const roundTripBooking = await RoundTrip.create(newRoundTripBooking);

    return res.status(201).send(roundTripBooking);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route forget all booking :

router.get("/", async (req, res) => {
  try {
    const roundTripBookings = await RoundTrip.find({});

    return res.status(200).json({
      count: roundTripBookings.length,
      data: roundTripBookings,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for Delete a RoundTrip:

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await RoundTrip.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "RoundTrip not found" });
    }
    return res.status(200).send({ message: "ROundTrip deleted succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
