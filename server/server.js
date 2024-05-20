const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const authRoute = require("./routes/auth.route.js");
const reserveRoute = require("./routes/reservation.route.js");
const restaurantRoute = require("./routes/restaurant.route.js");
const workshopRoute = require("./routes/workshop.route");
const registerRoute = require("./route/register.route.js");
const reviewRoute = require("./routes/review.route.js");
// connect to express app
const app = express();

const dbURI = process.env.MONGO_URI;
const port = process.env.PORT;

app.use(express.json()); 

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected to port ${port} and MongoDB`);
    });
  })
  .catch((error) => {
    console.log("Unable to connect to Server and/or MongoDB", error);
  });

// middleware // Parses the text as json
app.use(bodyParser.json());
app.use(cors());


//Routes
app.use("/api/auth", authRoute);
app.use("/api/reservation", reserveRoute);
app.use("/api/restaurant", restaurantRoute);
app.use("/api/review", reviewRoute);
app.use("/api/workshop", workshopRoute);
app.use("/api/registration", registerRoute);
// app.use("/api/users", userRoute);
// app.use("/api/community", communityRoute);


// Import workshop route
const workshopRoute = require("./routes/workshop.route");
// Use workshop routes
app.use("/api/workshop", workshopRoute);