import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import router from './routes/test-routes.js';
import UserRouter from './routes/UserRoutes.js';
import VideoRouter from './routes/VideoRoutes.js';

dotenv.config()
// express app
const app = express()

// cors options
const corsOptions = {
    origin: '*',
}

// middleware (anything that happens between the time the server gets
// the request and the time the server sends the response)
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    // the next piece of middleware in line will be run when next()
    // is called
    next();
})

// routes
app.use('/api/test', router);
app.use('/api/user', UserRouter);
app.use('/api/video', VideoRouter);

// connect to DB
const mongooseOptions = {
    autoIndex: true,
    dbName: "video-sharing"
}

mongoose.connect(process.env.MONGO_URI, mongooseOptions)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listening on port", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })



