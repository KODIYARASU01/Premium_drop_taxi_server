let mongoose = require("mongoose");

//Creating vehicle schema:

const vehicleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    // image:{
    //   data:Buffer,
    //   contentType:String,
    // }
  },
  {
    timestamps: true,
  }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);


module.exports=Vehicle;