const mongoose = require("mongoose")

// const CONN_URL = "mongodb+srv://burhanuddin:pinto%40house12@cluster0.f4ngguf.mongodb.net/?retryWrites=true&w=majority"
const CONN_URL = "mongodb+srv://burhanuddin:pinto%40house12@cluster0.f4ngguf.mongodb.net/jobportal"
const connectDB = async () => {
    try{
        console.log("Hello")
        // mongodb connection string
        const con = await mongoose.connect((CONN_URL), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB