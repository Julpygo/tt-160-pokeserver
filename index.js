const express = require("express");

const app = express()

const PORT = process.env.PORT || 3006

app.set("port",PORT)

app.use(express.json())

app.listen(PORT)