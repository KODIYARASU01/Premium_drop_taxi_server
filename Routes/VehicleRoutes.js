let express=require('express');
let Vehicle=require('../models/vehicleModel');
// let multer=require('multer')
let router=express.Router();


//Route for save new Vehicle by using post method :
router.post("/", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.amount) {
        return res.status(400).send({
          message: "Send all required fields : Name , Author , Amount",
        });
      }
      const newVehicle = {
        title: req.body.title,
        author: req.body.author,
        amount: req.body.amount,
      };
  
      const vehicle = await Vehicle.create(newVehicle);
  
      return res.status(201).send(vehicle);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  //Route for get all vehicles from database :
  
  router.get("/", async (req, res) => {
    try {
      const vehicles = await Vehicle.find({});
  
      return res.status(200).json({
        count: vehicles.length,
        data: vehicles,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  //Route for get one vehicles data  from database by id :
  
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const vehicle = await Vehicle.findById(id);
  
      return res.status(200).json(vehicle);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  //Route for update a vehicle :
  
  router.put("/:id", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.amount) {
        return res.status(400).send({
          message: "Send all required fields : Name , Author , Amount",
        });
      }
  
      const { id } = req.params;
  
      const result = await Vehicle.findByIdAndUpdate(id, req.body);
  
      if (!result) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      return res.status(200).send({ message: "Vehicle updated succesfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  //Route for Delete a vehicle
  
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await Vehicle.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      return res.status(200).send({ message: "Vehicle deleted succesfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });


  module.exports=router;
