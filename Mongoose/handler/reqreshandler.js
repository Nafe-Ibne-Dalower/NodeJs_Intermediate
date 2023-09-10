/******************
 * Title: Handler for Chapter-01
 * Description: Handler for Chapter-01
 * Author: 'Nafe Ibne Dalower'
 * Date: 2023-06-28
 *******************/
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const ch1schema = require("../schema/ch1schema");
const checkLogin = require("../middlewares/checkLogin");
const Ch1Model = new mongoose.model("MongoWithExpress", ch1schema);
// router.get("/", async (req, res) => {});

// router.get("/:id", async (req, res) => {});

router.post("/", async (req, res) => {
  try{
  const newdocch1 = new Ch1Model(req.body);
  await newdocch1.save();
  res.send("Successfully Sent Data...");
  }catch(err){
    res.send('ServerSide Error')
  }
});

// multiple
router.post("/multi", async (req, res) => {
  try{
  await Ch1Model.insertMany(req.body);
  res.send("Successfully Sent Data...");
  }catch(err){
    res.send('ServerSide Error')
  }
}); 

/* First Uncomment it */
// for update
// router.put("/:id", async (req, res) => {
//   v = await Ch1Model.updateOne({_id:req.params.id},{
//     $set:{
//       status: 'active'
//     }
//   })
//   res.send("Updated Successfully...")
//   console.log(v)
// });

// for update and seeing the output
router.put("/:id", async (req, res) => {
  try{
  v = await Ch1Model.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        status: "active",
      },
    }
  );
  res.send("Updated Successfully...");
  console.log(v);
  }catch(err){
    res.send('Serverside Error')
  }
});

router.delete("/:id", async (req, res) => {});

// For Finding
router.get("/", checkLogin ,async (req, res) => {
  try {
    console.log(await Ch1Model.find({ status: "active" }));
    res.send("Successfuly Sent Command....");
  } 
  catch (err) {
    res.send("Server Side error");
  }
});

router.delete("/:id", async (req, res) => {});

module.exports = router;
