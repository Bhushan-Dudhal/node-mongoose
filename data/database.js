import mongoose from "mongoose";

export const databaseconnection = () => {
    mongoose.connect(process.env.MONGO_URI,{dbName:"Apple"}).then(()=>console.log('database connection suceessfully')).catch((error)=>console.log(` Eroor While Dtabase Connection ${error}`))
}