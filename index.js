require("dotenv").config()
const express = require("express")

// express init
const app = express();

app.get("/", (req, res) => {
    res.json({
        "msg": "Hello World (Learno)"
    })
})

app.listen(process.env.PORT, () => console.log("Listening...."))