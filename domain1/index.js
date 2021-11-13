const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    const {} = req.body;
});

app.listen(port, console.log(`server1 is up on PORT:${port}`));