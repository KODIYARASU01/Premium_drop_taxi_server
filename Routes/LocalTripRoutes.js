let express = require("express");
let LocalTrip = require("../models/localTripModel");

let router = express.Router();

//Route for save RoundTrip :

router.post("/", async (req, res) => {
  try {
    if (
     !req.body.LocalName|| 
      !req.body.LocalPickUp ||
      !req.body.LocalDate ||
      !req.body.LocalTime
    ) {
      return res.status(400).send({
        message:
          "Send all required fields :LocalName, LocalPickUp ,  , LocalDate, LocalTime",
      });
    }

    const newLocalTripBooking = {
      LocalName:req.body.LocalName,
      LocalPickUp: req.body.LocalPickUp,
      LocalDate: req.body.LocalDate,
      LocalTime: req.body.LocalTime,
    };

    const localTripBooking = await LocalTrip.create(newLocalTripBooking);

    return res.status(201).send(localTripBooking);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route forget all booking :

router.get("/", async (req, res) => {
  try {
    const localTripBookings = await LocalTrip.find({});

    return res.status(200).json({
      count: localTripBookings.length,
      data: localTripBookings,
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

    const result = await LocalTrip.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "LocalTrip not found" });
    }
    return res.status(200).send({ message: "LocalTrip deleted succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
