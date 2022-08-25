const Data = require("../models/Data")


const createData = async (req, res, next) => {
    const newData = new Data(req.body);
  
    try {
      const savedData = await newData.save();
      res.status(200).json(savedData);
    } catch (err) {
      next(err);
    }
  };


const deleteData = async (req,res,next)=>{
    try{
        const deleted = await Data.findByIdAndDelete(req.params.id)
        res.status(200).json(deleted._id + " Data has been deleted")
    }catch(err){
        next(err);
    }
}

const getAllData = async (req,res,next)=>{
    try{
        const Datas = await Data.find();
        res.status(200).json(Datas)
    }catch(err){
        next(err);
    }
}


module.exports = {createData, deleteData, getAllData}