const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const tasksRouter = require("./routes/tasks.route")(express);

app.use("/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})