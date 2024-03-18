let mongoose = require("mongoose");

const roundTripSchema = mongoose.Schema({
  RoundTripName:{
     type: String,
    required: true,
  },
  RoundPickUp: {
    type: String,
    required: true,
  },
  RoundDropUp: {
    type: String,
    required: true,
  },
  fromDate: {
    type: String,
    required: true,
  },
   toDate: {
    type: String,
    required: true,
  },
  RoundTime: {
    type: String,
    required: true,
  },
},
  {
    timestamps: true,
  }
);


const RoundTrip=mongoose.model("RoundTrip",roundTripSchema);

module.exports=RoundTrip;
