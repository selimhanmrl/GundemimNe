const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser')
const app = express();
const path = require("path")
const dataRoute = require("./routers/Data")
const holdDataRoute = require("./routers/HoldData")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

dotenv.config(); 

mongoose.connect(process.env.MONGO);

const PORT = process.env.PORT || 5000


const connect = async () =>{

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
      console.log("Connected successfully");
    });
}

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB disconnected")
})

//middlewares

app.use(cookieParser());

app.use("/api/v1", dataRoute);
app.use("/api/v1/data", holdDataRoute);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, '/client/build')))


  app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client","build","index.html"))
  });
}else{
  app.get('/',(req, res)=>{
    res.send("Api running")
  });
}

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });


app.listen(PORT,()=>{
    connect()
    console.log("Connected...")
})