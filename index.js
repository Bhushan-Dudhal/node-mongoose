import { config } from "dotenv"
import express from "express"
import { databaseconnection } from "./data/database.js"
import router from "./routes/user.routes.js"
config({ path: "./config/.env" })

const app = express()

//midlleware
databaseconnection()
app.use(express.json())


//routes

app.use("/api/user", router)


//server

app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`);
})