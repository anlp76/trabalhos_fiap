const express = require("express")
const routes = require("./routes")
const port = 3333

const app = express()
app.use(routes)

app.listen(port, () => console.log("server running"))
