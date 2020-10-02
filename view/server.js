const express = require("express");
const app = express();
const routes = require("./routes.js")
app.use("/movies", routes);

app.listen(3000, () => {
    console.log("server on port 3000");
})