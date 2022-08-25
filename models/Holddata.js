const mongoose = require("mongoose");

const holdDataSchema = new mongoose.Schema({
  gundem: {
    type: Object,
    required: true,
  },
  timestamp : { 
    type : Date, 
    default: Date.now 
  }

});

module.exports = mongoose.model("HoldData", holdDataSchema);

