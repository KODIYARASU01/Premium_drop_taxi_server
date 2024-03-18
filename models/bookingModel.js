let mongoose = require("mongoose");
//Creating Booking schema:

const bookingSchema = mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    pickUp: {
      type: String,
      required: true,
    },
    dropUp: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
   
    mobile: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
