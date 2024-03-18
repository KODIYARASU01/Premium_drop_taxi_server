let express = require("express");
let Booking = require("../models/bookingModel");

let router = express.Router();

//Route fot save new booking :

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.pickUp ||
      !req.body.dropUp ||
      !req.body.date ||
      !req.body.time ||
      !req.body.mobile
    ) {
      return res.status(400).send({
        message:
          "Send all required fields : name , pickUp , dropUp , date,time,mobile",
      });
    }

    const newBooking = {
      name: req.body.name,
      pickUp: req.body.pickUp,
      dropUp: req.body.dropUp,
      date: req.body.date,
      time: req.body.time,
      mobile: req.body.mobile,
    };
    const booking = await Booking.create(newBooking);
    return res.status(201).send(booking);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route forget all booking :
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find({});

    return res.status(200).json({
      count: bookings.length,
      data: bookings,
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

    const result = await Booking.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Booking not found" });
    }
    return res.status(200).send({ message: "Booking deleted succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
