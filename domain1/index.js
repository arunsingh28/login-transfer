const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("ok");
});

app.listen(port, console.log(`server is up on PORT:${port}`));