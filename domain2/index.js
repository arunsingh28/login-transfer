const express = require("express");
const app = express();
const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
    res.send("ok");
});

app.listen(port, console.log(`server2 is up on PORT:${port}`));