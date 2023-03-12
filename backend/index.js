const express = require("express")
const app = express()
const cors = require("cors")
// const morgan = require("morgan")
const route = require("./server/routes/employeeRoutes")
const connectDB=require("./server/db/conn")
// const bodyparser = require("body-parser");

// Log Requests
// app.use(morgan('tiny'))
// mongodb connection

// 👇️ configure CORS
app.use(cors());
app.use(express.json())
app.use(express.urlencoded())

connectDB()



app.use("/employee",route)
app.use("/employer",route)





app.listen(5000,()=>{
    console.log(`Server is running on http://localhost:5000`)
})