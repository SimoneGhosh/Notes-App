//const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import noteRoutes from './routes/note.route.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 4001

//Database Connection Code
try {
    //console.log("MONGO_URL:", process.env.MONGO_URL)
    mongoose.connect(process.env.MONGO_URL)
    console.log("connected to MongoDB")
} catch (error) {
    console.log("Error connecting to MongoDB", error)
}

//Routing Middleware
app.use(express.json())
app.use(cors())
app.use("/api/v1/noteapp", noteRoutes)

app.listen(port, () => {
  console.log(`server is running on  ${port}`)
})
