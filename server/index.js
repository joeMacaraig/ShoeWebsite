import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

//import routes


dotenv.config()

//dotenv items
const PORT = process.env.PORT;
const DB_PORT = process.env.DB_PORT;

const app = express();

//middleware
app.use(cors());

//routes

//database conenction
mongoose
    .set('strictQuery', false)
    .connect(DB_PORT, {useNewUrlParser : true, dbName: "ShoeWebsite"})
    .then(() => app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT} 🚀`)))
    .catch((error) => console.log(error));
