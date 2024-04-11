import express from "express"
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config()
// express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.get('/', (req, res) => {
    res.json({msg: "sfgsfsdf"})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT);
})

