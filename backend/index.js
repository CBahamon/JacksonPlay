const express = require("express")
const mongoose = require("mongoose")
const dotenv = require('dotenv');
const videoGameRoute = require('./routes/videoGame.routes')
const userRoute = require('./routes/user.routes')

const app = express();

dotenv.config();

app.use(express.json())

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log('mongo connect');
    })
    .catch((err) => console.log(err));

    app.use("/api/videogames", videoGameRoute)
    app.use("/api/user", userRoute)

app.listen(8800, () =>{
	console.log("Backend server is running asd");
})
