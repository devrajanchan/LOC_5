const mongoose = require ("mongoose")

const loginEmployeeSchema = new mongoose.Schema({
    email:{
        type: String,
        trim: true,
        required:true,
        unique:true
    },
    password:{
        type:String
    }

})

const loginEmployee = mongoose.model("loginEmployee",loginEmployeeSchema)

module.exports=loginEmployee