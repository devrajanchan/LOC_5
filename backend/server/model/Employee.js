const mongoose = require ("mongoose")

const employeeSchema = new mongoose.Schema({
    firstname : {
        type : String,
        // required:true
    },
    lastname:{
        type:String,
        // required:true,
        // unique:true
    },
    email:{
        type: String,
        trim: true,
        // required:true,
        // unique:true
    },
    birth:{
        type:Date,
        // required:true
    },
    skill1:{
        type:String
    },
    skill2:{
        type:String
    },
    skill3:{
        type:String
    },
    // image:{
    //     data: Buffer,
    //     contentType: String  
    // },
    exp:{
        type:Number
    },
    gap:{
        type:Number
    },
    loc:{
        type:String
    },
    linkeldin:{
        type:String,
    },
    githubs:{
        type:String,
    }

})

const Employee = mongoose.model("employee",employeeSchema)

module.exports=Employee