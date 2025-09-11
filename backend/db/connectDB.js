import mongo from 'mongoose'

const connectDB = ()=>{
    mongo.connect(process.env.MONGO_URI,{
        dbName:'Resturant',
    })
    .then(()=>{
        console.log('DB connected successfully!')})
    .catch(err=>{
        console.log(err.message)
    })
}

export default connectDB