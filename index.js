const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

// dotenv config
dotenv.config({ path: './.env' })

// rest object
mongoose.connect(process.env.MONGO_URL)
const app = express()

// middleware
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    Credentials: true
}))


// routes
app.use('/api/v1/resume', require('./routes/adminRoute'))



app.use(express.static(path.join(__dirname, "dist")))

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})




// listen
mongoose.connection.once("open", () => {
    console.log("MONGO RUNNING")
    app.listen(process.env.PORT, console.log(`SERVER RUNNING:http://localhost:${process.env.PORT}`))
})



