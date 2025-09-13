const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const quoteRouter = require("./routes/quotes.route")(express);

app.use("/", quoteRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})