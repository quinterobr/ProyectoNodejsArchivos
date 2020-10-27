const express = require("express");
const app = express();
const routes = require("./routes.js")

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.json());

app.use("http://localhost:3000/", routes);

app.use((err, req, res, next) => {
    res.status(400).json({
        code: "1010",
        status: "400",
        data: err.message
    });
});


app.listen(3000, () => {
    console.log("server on port 3000");
})

module.exports = app;
