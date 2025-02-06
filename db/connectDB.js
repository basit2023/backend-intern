const mongoose=require( "mongoose");
const connectDB=async()=>{
    try {
         await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("db connected successfully")
        
    } catch (error) {
        console.log("getting issue while connecting db")
        process.exit(1)

    }

}
module.exports=connectDB;