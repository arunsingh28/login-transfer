const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    const {userName,token} = req.body;
    if(!token){
        return res.status(404).josn({
            message: "invalid crenditional",
            auth: false
        })
    }else{
        // check password here 
        // if everything is correct
        res.status(200).json({
             message:"Login successfull",
            auth:true
        })
    }
});

app.listen(port, console.log(`server1 is up on PORT:${port}`));
