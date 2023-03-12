const mongoose = require ("mongoose")

const loginEmployerSchema = new mongoose.Schema({
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

const loginEmployer = mongoose.model("loginEmployer",loginEmployerSchema)

module.exports=loginEmployer