let mongoose = require("mongoose");

const localTripSchema = mongoose.Schema(
  {
    LocalName: {
      type: String,
      required: true,
    },
    LocalPickUp: {
      type: String,
      required: true,
    },
    LocalDate: {
      type: String,
      required: true,
    },
    LocalTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const LocalTrip = mongoose.model("LocalTrip", localTripSchema);

module.exports = LocalTrip;
