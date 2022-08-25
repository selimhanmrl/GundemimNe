const express = require("express");
const { createData,deleteData, getAllData } = require("../controllers/HoldData");
const router = express.Router();

router.get('/check'  ,(req, res, next)=>{
    res.send("Hello Offer, you are logged in")
})

//Create
router.post("/", createData)

//Delete
router.delete("/:id", deleteData)

//Get ALl
router.get("/", getAllData);

module.exports = router;